const { ButtonStyle } = require('discord.js');
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../Credentials/Embed")
module.exports = {
    name: 'formc',
  ownerOnly: true ,
    run: async (client, message, args, container) => {
      
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
    .setCustomId('colorv')
    .setLabel('COLOR')
    .setStyle(ButtonStyle.Primary)
    .setEmoji('1088350835785875507'),
              new ButtonBuilder()
    .setCustomId('biov')
    .setLabel('BIOGRAPHY')
    .setStyle(ButtonStyle.Primary)
    .setEmoji('1088352664552747079'),
              new ButtonBuilder()
    .setCustomId('hiddenv')
    .setLabel('HIDDEN')
    .setStyle(ButtonStyle.Primary)
    .setEmoji('1079136040780054668'),
);
          
      const ebug = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle('Self Role')
	.setURL(`${config.embed.link}`)
 .setThumbnail(`${config.embed.logom}`)
	.setAuthor({ name: `${config.embed.name} BIO`, iconURL: `${config.embed.logo}`})
	.setDescription('Click The <:colorr:1088350835785875507> Button To Select Color Role \nClick The <:bioo:1088352664552747079> Button To  Select Biography Role\nClick The <:hidden:1079136040780054668> Button To Select Hidden Role \n────────────────────\nدکمه <:colorr:1088350835785875507> را بزنید تا رول رنگ را انتخاب کنید\nدکمه <:bioo:1088352664552747079> را بزنید تا رول بیوگرافی را انتخاب کنید\nدکمه <:hidden:1079136040780054668> را بزنید تا رول هیدن را انتخاب کنید ')
	.setImage('https://cdn.discordapp.com/attachments/1063038170779877479/1088356915156877312/20230323_103107.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [ebug], components: [row]})
  }
    }
    
