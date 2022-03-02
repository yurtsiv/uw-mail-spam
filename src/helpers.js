const { defaultMessage } = require("./config");

function sendMail(transporter, message = defaultMessage) {
  transporter.sendMail(
    {
      ...defaultMessage,
      ...message,
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
}

module.exports = { sendMail };
