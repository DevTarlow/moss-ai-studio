const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const express = require("express");
const {initializeApp, getApps} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

if (!getApps().length) {
  initializeApp();
}
const db = getFirestore();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function syncToBrevo(email, attributes) {
  const apiKey = functions.config().brevo?.api_key;
  const listId = functions.config().brevo?.list_id;
  if (!apiKey || !listId) return;
  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      "Accept": "application/json",
    },
    body: JSON.stringify({
      updateEnabled: true,
      email,
      listIds: [parseInt(listId)],
      attributes,
    }),
  });
}

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();
    const company = req.body.company?.trim() || "";
    const message = req.body.message?.trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    await db.collection("contact_messages").add({
      name,
      email,
      company,
      message,
      created_at: new Date(),
    });

    syncToBrevo(email, { FIRSTNAME: name }).catch((e) => console.error("Brevo error:", e));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const source = req.body.source?.trim() || "website";

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    await db.collection("subscribers").doc(email).set({
      email,
      source,
      created_at: new Date(),
    });

    syncToBrevo(email, { SOURCE: source }).catch((e) => console.error("Brevo error:", e));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

setGlobalOptions({ maxInstances: 10 });

exports.api = onRequest({ cors: true }, app);
