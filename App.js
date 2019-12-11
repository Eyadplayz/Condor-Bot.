require('dotenv').config();
const Discord = require('discord.js');
const Bot = new Discord.Client();
const Prefix = '!';
Flino = ""

BOT_TOKEN = process.env.tokne
Bot.login(BOT_TOKEN);

Bot.on('message', message =>  {

const HR =message.guild.roles.find(role => role.name === "High Rank");
let msg = message.content.toUpperCase();
let sender = message.author;
let msg2 = message.content
if (msg.startsWith(Prefix)) {
if (msg === Prefix + 'HELLO') {
  message.channel.send('Hello ' + sender + '!')
}
if (msg === Prefix + 'PING') {
    message.channel.send('Pong! ' +  Math.round(Bot.ping) + " ms")
}
if (msg === Prefix + 'CREEPER') {
  message.channel.send('Aww man!')
}
if (msg === Prefix + 'COIN') {
num = Math.floor((Math.random() * 2) + 1);
if (num === 1) {
  message.channel.send('Heads! \n https://cdn.discordapp.com/attachments/646085379337879576/648219868260335616/head.jpeg')

}
if (num === 2) {
  message.channel.send('Tails! \n https://cdn.discordapp.com/attachments/646085379337879576/648219797615542303/tail.jpeg')

}
}
if (msg === Prefix + 'OOF') {
  message.channel.send('OOF!')
}
if (msg === Prefix + 'GOODBYE') {
  message.channel.send('BYE!')
}
if (msg === Prefix + 'SAYHELLO') {
  message.channel.send('!Hello')
}
if (msg === Prefix + 'APPLY') {
    message.channel.send('Sending you the links!')
  message.author.send(">>> " + 'Captain application: https://docs.google.com/forms/d/1HL6wODtyoJkX7cVCc7cwFqA_sbMU9Z3f4AQSKUwyFN4/edit \n Ground crew application: https://docs.google.com/forms/d/1XZu6V1x6B748uV5YPmX0gtKNpkqZGNq1LlNGkHFncoQ/edit \n Flight attendant application: https://docs.google.com/forms/d/1CravPx0KFHCBPPhvVvf5a5cX-PUN5BRwUY-DH3NyZzg/edit \n Flight host application : https://docs.google.com/forms/d/1bJzUGSYegOT7A2vNlVlKo9tAOPiucpq-g98fPYfSPWU/edit')
}
if (msg === Prefix + 'HELP') {
  message.channel.send(">>> "+'Information Commands  \n Apply:to get a job \n Flight:Tells you the info of a flight \n Fun Commands \n Hello,Coin,Oof,Creeper,Ping,Goodbye,Sayhello \n HR:Addflight,Removeflight ')
}
if (msg === Prefix + 'FLIGHT') {
  if (Flino === "") {
  message.channel.send("The next flight hasn't been comfirmed yet.")
}
else {
message.channel.send(">>> Flight info \n" + Flino)
}
}
  if (msg.startsWith(Prefix + 'ADDFLIGHT')){
    if(message.member.roles.has(HR.id)) {
Flino = msg2.slice(10,1000)
    //Flino = Flino.toLowercase()
 message.channel.send("Flight Added")
}
    else{
      message.channel.send("You are not HR!")
    }
  }
 if (msg === Prefix + 'REMOVEFLIGHT') {
   if(message.member.roles.has(HR.id)) {
  message.channel.send('Flight Removed')
  Flino = ""
     }
    else{
      message.channel.send("You are not HR!")
    }
} 
  if (msg === Prefix + 'INFO') {
  message.channel.send("Condor Airlines was founded by Estxril We aim to operate flights throughout the week.")
    
  message.channel.send(">>> Fleet \n -Airbus A330-300 (In Service) \n -Airbus A320-214 (In Service) \n -Airbus A319-100 (In Service) \n -Bombardier Dash 8 Q400 (ordered)")
message.channel.send ('Condorbot is developed by Eyadplayz')
} 
}
});

Bot.on('guildMemberAdd', member => {
const Welchan = member.guild.channels.find (channel => channel.name === 'join-leave');
  Welchan.send(
    `Welcome to the Condor Airlines Server! `+ member
  )
})

Bot.on('ready' , () => {
  console.log('Bot up');
});
