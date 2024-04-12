const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1228450944572985345') // make your bot in discord.com/developers and paste the application ID here
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=5O80f_ZdXtQ') //Must be a youtube video link 
    .setState('Only guy looking Freedom🕊️')
    .setName('Jaafar')
    .setDetails(`Jaafar Senpai`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1124765910750724116/1228455662057558096/b7445e3138767d8b3fc7fec4a8bf2bfd.gif?ex=662c1b7d&is=6619a67d&hm=9de74b093844555a09005657f7711a97355a857a8270670bca7a33957e63b237&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('I love everyone <3') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1124765910750724116/1228457049684447324/b30270fb365728186ad1bd86aa05a362.gif?ex=662c1cc8&is=6619a7c8&hm=ebf7e4d2e75cc9cf3d45b15bf7ccf80846851e9bad879a03d453119c2f7d3ab5&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(':3') //Text when you hover the Small image
    .addButton('My Insta 🎻', 'https://www.instagram.com/j._9e?igsh=cjRxNjM5N3FkNXZk')
    .addButton('for tells 🧧', 'https://tellonym.me/jyoo9');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Jaafar Senpai 💫`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets