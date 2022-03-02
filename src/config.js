const defaultMessage = {
  from: auth.email,
  subject: "STOP THE WAR!",
  text: "text",
  html: "<p>html markup</p>",
};

const auth = {
  service: "gmail",
  email: "",
  password: "",
};

const filename = "email.txt";

module.exports = {
  defaultMessage,
  auth,
  filename,
};
