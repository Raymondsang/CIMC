// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');

// admin.initializeApp();

// // Configure the email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'betttonny26@gmail.com',
//     pass: 'zyrbnovdozouyjgf',
//   },
// });

// exports.sendBookingConfirmation = functions.firestore
//   .document('bookings/{bookingId}')
//   .onCreate((snap, context) => {
//     const bookingData = snap.data();

//     const mailOptions = {
//       from: 'betttonny26@gmail.com',
//       to: bookingData.email,
//       subject: 'Booking Confirmation',
//       text: `Hi ${bookingData.name}, your appointment is confirmed for ${bookingData.date} at ${bookingData.time}.`,
//       html: `<strong>Hi ${bookingData.name},</strong><p>Your appointment is confirmed for ${bookingData.date} at ${bookingData.time}.</p>`,
//     };

//     // Send email using Nodemailer
//     return transporter.sendMail(mailOptions)
//       .then(() => console.log('Email sent successfully'))
//       .catch((error) => console.error('Error sending email:', error));
//   });
