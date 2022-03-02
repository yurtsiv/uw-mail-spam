const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { auth } = require("./config");
const { sendMail } = require("./helpers");

const transporter = nodemailer.createTransport({
  service: auth.service,
  auth: {
    user: auth.email,
    pass: auth.password,
  },
});

const stream = fs.createReadStream(
  path.join(__dirname, "../", FILENAME),
  "utf8"
);

stream.on("data", (chunk) => {
  const mails = chunk.split("\n");

  for (const mail of mails) {
    sendMail(transporter, { to: mail.trim() });
  }
});
