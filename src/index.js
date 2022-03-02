const fs = require('fs');
const path = require('path');
const { defaultMessage } = require('./config');
const readline = require('readline');
const { getMailers, randomElem, getAlreadySent } = require('./helpers');

async function start() {
  const mailers = getMailers();

  const stream = fs.createReadStream(
    path.join(__dirname, '../', 'emails.txt'),
    'utf-8'
  );

  const alreadySent = getAlreadySent();

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
      await fs.appendFileSync(
        path.join(__dirname, '../', 'emailsSent.txt'),
        `\n${to}`
      );
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
  };

  for await (const email of rl) {
    if (!alreadySent.has(email)) {
      await send(email.trim());
    }
  }

  for (const email of erroredEmails) {
    await send(email);
  }
}

start();
