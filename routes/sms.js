const router = require("express").Router();
const {
  sendSMS,
  smsUsingMessageServiceID,
  sendGroupSMS,
} = require("../twilio/twilioClient");

// POST - Send a SMS message
router.post("/sms", (req, res) => {
  const attributes = req.body;

  sendSMS(attributes.recipient, attributes.message)
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
});

// POST - Send a SMS message using Copilot Messaging Service
router.post("/smsUsingMessageServiceID", (req, res) => {
  const attributes = req.body;

  smsUsingMessageServiceID(attributes.recipient, attributes.message)
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
});

// POST - Send a Group SMS message
router.post("/sendGroupSMS", (req, res) => {
  const attributes = req.body;

  sendGroupSMS(attributes.recipients, attributes.message)
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
