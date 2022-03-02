const { defaultMessage } = require("./config");

function sendEmail(mailer, message = {}) {
  return mailer({
    ...defaultMessage,
    ...message,
  }).catch((err) => console.log(err));
}

module.exports = { sendEmail };
