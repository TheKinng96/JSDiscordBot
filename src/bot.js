require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`)
})

client.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content} `);
  if (message.content === 'hello') {
    message.reply('hi there')
  }
})
client.login(process.env.BOT_TOKEN)