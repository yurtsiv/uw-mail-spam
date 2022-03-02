const fs = require("fs");
const path = require("path");
const nodeMailer = require("nodemailer-promise");
const { auth, filename } = require("./config");
const { sendEmail } = require("./helpers");

const mailer = nodeMailer.config({
  service: auth.service,
  auth: {
    user: auth.email,
    pass: auth.password,
  },
});

const stream = fs.createReadStream(
  path.join(__dirname, "../", filename),
  "utf8"
);

stream.on("data", (chunk) => {
  const mails = chunk.split("\n");

  Promise.all(mails.map((mail) => sendEmail(mailer, { to: mail.trim() })))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});
