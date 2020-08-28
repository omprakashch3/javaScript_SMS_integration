const twilio = require("twilio");

// Send SMS Messages directly using a Twilio Number
const sendSMS = (to, body) => {
  // Initialise account credentials
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_NUMBER = process.env.TWILIO_NUMBER;

  // Create new twilio client
  const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  return new Promise((resolve, reject) => {
    // Send the text message.
    client.messages.create(
      {
        to, // Recipient's number
        from: TWILIO_NUMBER, // Twilio Number
        body, // Message to Recipient
      },
      (error, message) => {
        if (error) {
          reject(error);
        } else {
          resolve({ to, body });
        }
      }
    );
  });
};

// Send SMS Messages using Co-pilot (Twilio Messaging Service)
const smsUsingMessageServiceID = (to, body) => {
  // Initialise account credentials
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_MESSAGING_SERVICE_SID = process.env.TWILIO_MESSAGING_SERVICE_SID; // Using SID instead of Twilio number

  // Create new twilio client
  const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  return new Promise((resolve, reject) => {
    // Send the text message.
    client.messages.create(
      {
        to, // Recipient's number
        messagingServiceSid: TWILIO_MESSAGING_SERVICE_SID, // Twilio Messaging SID
        body, // Message to Recipient
      },
      (error, message) => {
        if (error) {
          reject(error);
        } else {
          resolve({ to, body });
        }
      }
    );
  });
};

// Send Group SMS Messages
const sendGroupSMS = (numbers, body) => {
  return new Promise((resolve, reject) => {
    const delivered = []; // List of numbers in which message is delivered successfully
    const failed = []; // List of numbers in which message failed delivery

    Promise.all(
      // For every recipient phone number
      numbers.map((to) => {
        return sendSMS(to, body) // Optional: Can be changed to smsUsingMessageServiceID if using Co-pilot
          .then((success) => {
            delivered.push(to); // Message is delivered
          })
          .catch((error) => {
            failed.push(to); // Message not sent
          });
      })
    ).then((results) => {
      // Return the message sent, the numbers delivered to and the numbers which failed
      resolve({ body, delivered, failed });
    });
  });
};

module.exports = {
  sendSMS,
  smsUsingMessageServiceID,
  sendGroupSMS,
};
