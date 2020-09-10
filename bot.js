const Discord = require('discord.js')
const client = new Discord.Client()
//const keepAlive = require('./server');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
	var generalChannel = client.channels.find(channel => channel.name === "reminders");
});
client.on('message', msg => {
	var d = new Date();
	if(d.getHours()==6){
	    generalChannel.send("@everyone Good morning! Please remember to take your temp before leaving your room this morning (https://prodwebxe-hv.rose-hulman.edu/hsst-cgi/tool.pl). Also, don't forget your face mask!");
	}else{
	generalChannel.send("meow");
	}
  
});


client.login(process.env.bot_secret_token);
