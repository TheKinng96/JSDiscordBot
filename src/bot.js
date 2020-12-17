require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`)
})

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)
    
    if (CMD_NAME === 'chorei') {
      if(message.author)
      message.channel.send('yoyo')
    }
  }
  
})

client.login(process.env.BOT_TOKEN)