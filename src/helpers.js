const fs = require('fs');
const nodeMailer = require('nodemailer-promise');
const path = require('path');
const { defaultMessage } = require('./config');

const getMailers = () =>
  fs
    .readFileSync(path.join(__dirname, '../', 'senders.txt'), 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const chunks = line.split(':');
      return [chunks[0], chunks[2]];
    })
    .map(([email, pass]) => {
      return {
        email,
        mailer: nodeMailer.config({
          host: 'smtp.mail.ru',
          port: 465,
          auth: {
            user: email.trim(),
            pass: pass.trim(),
          },
        }),
      };
    });

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomElem = (arr) => arr[randomInt(0, arr.length - 1)];

module.exports = { randomInt, getMailers, randomElem };
