const fs = require('fs');
const path = require('path');
const { defaultMessage } = require('./config');
const readline = require('readline');
const { getMailers, randomElem } = require('./helpers');
const { randomInt } = require('crypto');

async function start() {
  let mailers = getMailers();
  setInterval(() => {
    console.log('Refreshing mailers...');
    mailers = getMailers();
  }, 20000);

  const stream = fs.createReadStream(
    path.join(__dirname, '../', 'emails.txt'),
    'utf-8'
  );

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  const erroredEmails = [];
  let successCount = 0;

  const send = async (to) => {
    const { email: from, mailer } = randomElem(mailers);

    try {
      await mailer({ to, from, ...defaultMessage });
      successCount++;
      console.log('Sent from ', from, ' to ', to, ' Successes: ', successCount);
    } catch (e) {
      erroredEmails.push(to);
      console.error(
        'Error sending from ',
        from,
        ' to ',
        to,
        ' ',
        e.message,
        ' Errors: ',
        erroredEmails.length
      );
    }

    const waitTime = randomInt(2000, 5000);
    await new Promise((res) => setTimeout(res, waitTime));
  };

  for await (const email of rl) {
    await send(email.trim());
  }

  for (const email of erroredEmails) {
    await send(email);
  }
}

start();
