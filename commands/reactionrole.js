module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { RedEmoji } = require('../config.json');
        const { RedName } = require('../config.json')
        const { BlueEmoji } = require('../config.json')
        const { BlueName } = require('../config.json')
        const { GreenEmoji } = require('../config.json');
        const { GreenName } = require('../config.json')
        const { OrangeEmoji } = require('../config.json');
        const { OrangeName } = require('../config.json')
        const { YellowEmoji } = require('../config.json');
        const { YellowName } = require('../config.json')
        

        const { MessageEmbed } = require('discord.js')
        let AAAAembed = new Discord.MessageEmbed()
            .setColor('#17b111')
            .setTitle('React to the corresponding emojis to get personalized notifications!')
            .setDescription('Once reacting you will gain your roles!\n\n'
                + `${MaleEmoji} for ${MaleName}\n` //copy this line
                + `${FemaleEmoji} for ${FemaleName}\n`)

        console.log("Reactionrole Message Created")
        let msg = await message.channel.send({ embeds: [AAAAembed]});
        msg.react(`${MaleEmoji}`) //copy this
        msg.react(`${FemaleEmoji}`)
    }
}