const config = require('./config.json');
const privateKey = config.privateKey;

const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Replace with your own VAPID keys (generate them at https://tools.reactpwa.com/vapid)
const vapidKeys = {
  publicKey: "BPm4q113E3V-bt04RLVaeLDEiZMUG-GlHKmSfK9UrMClsznvHbFYUf93aSnlgXfn6R-CTlZZZ0faM-82YJyMM2k",
  privateKey: privateKey,
};

webPush.setVapidDetails(
  'mailto:your_email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});

  const payload = JSON.stringify({ title: 'Push Notification Example' });

  webPush.sendNotification(subscription, payload).catch((error) => {
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
