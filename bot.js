const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = '+'

Client.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${Client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${Client.guilds.size} " ]`);
  console.log(`Users! [ " ${Client.users.size} " ]`);
  console.log(`channels! [ " ${Client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




var ServerID = "510045258139303946"; 
var ChannelID = "510195806079287316";
Client.on('warn', console.warn);
Client.on('error', console.error);
Client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));
Client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    Client.on('message', msg => {
        Client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 500);


client.login(process.env.BOT_TOKEN);
