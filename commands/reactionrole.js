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
            .setTitle('برای دریافت رنگ رول مورد نظر، ری اکشن رول مربوطه را بزنید!')
            .setDescription('پس از زدن ری اکشن، رول به شما داده خواهد شد!\n\n'
                + `${RedEmoji} برای ${RedName}\n` //copy this line
                + `${BlueEmoji} برای ${BlueName}\n`
                + `${GreenEmoji} برای ${GreenName}\n`
                + `${OrangeEmoji} برای ${OrangeName}\n`
                + `${YellowEmoji} برای ${YellowName}\n`)

        console.log("Reactionrole Message Created")
        let msg = await message.channel.send({ embeds: [AAAAembed]});
        msg.react(`${RedEmoji}`) //copy this
        msg.react(`${BlueEmoji}`)
        msg.react(`${GreenEmoji}`)
        msg.react(`${OrangeEmoji}`)
        msg.react(`${YellowEmoji}`)
    }
}