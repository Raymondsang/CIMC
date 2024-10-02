const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Initialize Firebase Admin
admin.initializeApp();

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

exports.sendBookingConfirmation = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate((snap, context) => {
    const bookingData = snap.data();

    const msg = {
      to: bookingData.email, // the user email
      from: 'betttonny26@gmail.com', // SendGrid verified email
      subject: 'Booking Confirmation',
      text: `Hi ${bookingData.name}, your appointment is confirmed for ${bookingData.date} at ${bookingData.time}.`,
      html: `<strong>Hi ${bookingData.name},</strong><p>Your appointment is confirmed for ${bookingData.date} at ${bookingData.time}.</p>`,
    };

    // Sending the email using SendGrid API 
    return sgMail.send(msg)
      .then(() => console.log('Email sent successfully'))
      .catch((error) => console.error('Error sending email:', error));
  });
