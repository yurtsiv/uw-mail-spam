const fs = require('fs');
const path = require('path');
const nodeMailer = require('nodemailer-promise');
const { filename } = require('./config');
const { sendEmail } = require('./helpers');

const mailer = nodeMailer.config({
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const stream = fs.createReadStream(
  path.join(__dirname, '../', filename),
  'utf8'
);

stream.on('data', (chunk) => {
  const mails = chunk.split('\n');

  Promise.all(mails.map((mail) => sendEmail(mailer, { to: mail.trim() })))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});
