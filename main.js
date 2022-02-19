const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"] });

const prefix = '/';

const fs = require('fs');

client.commands = new Discord.Collection();

const { RedEmoji } = require('./config.json');
const { RedRole } = require('./config.json');
const { BlueEmoji } = require('./config.json');
const { BlueRole } = require('./config.json');
const { GreenEmoji } = require('./config.json');
const { GreenRole } = require('./config.json');
const { OrangeEmoji } = require('./config.json');
const { OrangeRole } = require('./config.json');
const { YellowEmoji } = require('./config.json');
const { YellowRole } = require('./config.json');
const { botToken } = require('./config.json');
const { channel } = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Bot is online!`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift() .toLowerCase();



    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord, client);
    }  else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    };
});
client.on('messageReactionAdd', async (reaction, user) => { //here
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === RedEmoji) { 
            await reaction.message.guild.members.cache.get(user.id).roles.add(RedRole);
        } 
        if (reaction.emoji.name === BlueEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(BlueRole);
        }
         if (reaction.emoji.name === GreenEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(GreenRole);
        }
         if (reaction.emoji.name === OrangeEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(OrangeRole);
        }
         if (reaction.emoji.name === YellowEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(YellowRole);
        }
    }
}
);

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === RedEmoji) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(RedRole); //these 3
        } //lines
        if (reaction.emoji.name === BlueEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(BlueRole);
        }
        if (reaction.emoji.name === GreenEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(GreenRole);
        }
        if (reaction.emoji.name === OrangeEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(OrangeRole);
        }
        if (reaction.emoji.name === YellowEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(YellowRole);
        }
    }
}
); //to here


client.login(`${botToken}`);