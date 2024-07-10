const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/ZguJjVkJbW';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1148591884776779836/1259655155301748786/images.png?ex=668dca48&is=668c78c8&hm=0274ee02a91078e7f592d64f052b1279cfaccaf13814f93d5c3fe8fb02b7ff36&`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
