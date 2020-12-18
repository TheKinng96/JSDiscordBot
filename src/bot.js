require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let chosen = [];

let members = ['Azfar', 'Henry', 'Ippei', 'Shivani', 'Yoshie', 'Vitor', 'Chenrui', 'Bat'];
let man = ['Azfar', 'Vitor', 'Ricardo', 'Bat', 'Chenrui', 'Gen', 'Shiki'];
let woman = ['Flo', 'Yoshie', 'Karina', 'Shivani', 'Aya'];

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`)
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)
    
    if (CMD_NAME === 'chorei') {
      let randomNum = getRandomInt(0,(members.length-1));
      chosen.push(members[randomNum]);
      
      if (chosen.includes(members[randomNum])) {
        getRandomInt(0, members.length);
        message.channel.send('誰でしょうか');
        setTimeout(() => {
          message.channel.send(`Congratulation ${members[randomNum]} has been chosen!!!`)
        }, 1000)
        return;
      } else {
        message.channel.send('誰でしょうか');
        setTimeout(() => {
          message.channel.send(`Congratulation ${members[randomNum]} has been chosen!!!`)
        }, 1000)
        return;
      }
    }

  }
  if (message.content.toLowerCase() === "morning") {
    message.reply("Morning!!!")
  }
  if (message.content.toLowerCase() === "who is the weirdest person on adsist?") {
    let randomNum = getRandomInt(0,(man.length-1));
      message.channel.send('誰でしょうか');
      setTimeout(() => {
        message.channel.send(`${man[randomNum]} is the weirdest person!!!`)
      }, 1000)
  }

  if (message.content.toLowerCase() === "mirror, mirror, who is the most beautiful person on adsist?") {
    let randomNum = getRandomInt(0,(woman.length-1));
      message.channel.send('誰でしょうか');
      setTimeout(() => {
        message.channel.send(`${woman[randomNum]} is the most beautiful one~`)
      }, 1000)
  }
})

client.login(process.env.BOT_TOKEN)