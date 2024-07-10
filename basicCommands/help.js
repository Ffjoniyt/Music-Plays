const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1148591884776779836/1259655155301748786/images.png?ex=668f1bc8&is=668dca48&hm=04383f79fe135d915467432a0c0c5a6b26663d533a676995d8ae05c207bd2b93&', 
        url: 'https://discord.gg/ZguJjVkJbW'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [bush1uk](https://discord.gg/ZguJjVkJbW)**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1148591884776779836/1259655155301748786/images.png?ex=668f1bc8&is=668dca48&hm=04383f79fe135d915467432a0c0c5a6b26663d533a676995d8ae05c207bd2b93&`);

    const button1 = new ButtonBuilder()
      .setLabel('NeverLeaveBoys Community')
      .setURL('https://discord.gg/hawkSq2m9R')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('NeverLeaveBoys Cheats')
      .setURL('https://discord.gg/ZguJjVkJbW')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Boot Inv')
      .setURL('https://discord.com/oauth2/authorize?client_id=1049031350461661194&permissions=8&integration_type=0&scope=bot')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
