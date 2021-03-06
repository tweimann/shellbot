var Discord = require('discord.js');
var shell = require('shelljs');
var bot = new Discord.Client();

bot.once('ready', () => {
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: ' ',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/xqcow'
		}
	});
	console.log('Ready!');
});

bot.login(); //fill in your token in the ()

bot.on('message', message => {
	var sender = message.author;
	var msg = message.content.toUpperCase();

	if (msg.startsWith('SH ')) {
		shell.exec(msg.substring(3).toLowerCase(), (code, output) => {
			message.channel.send(output.substring(0, 2000));
		});
		return
	}
});