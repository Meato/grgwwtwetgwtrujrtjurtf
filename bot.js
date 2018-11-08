const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on("message", async message => {
	const myID = "248412206637514753";
if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = "join";
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

if (command === `${prefix}join`) {
        message.member.voiceChannel.join()
    message.channel.send(' ')
};

});

client.login(توكن حسابك);
"NTA3MjM2MDgyNjU2NDc3MTg5.DsWo6Q.sFZN5hRMHzH13I_jSUqUWHYcjzQ"
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "Id server"; 510045258139303946
var channel = "id room";  510045318860242944
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
