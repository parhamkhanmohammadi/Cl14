const { ButtonStyle } = require('discord.js')
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../Credentials/Embed")
module.exports = {
    name: 'id',
    run: async (client, message, args, container) => {
let messageArry = message.content.split(" ")
  let rolecmd = messageArry[0]
  let instagramId = messageArry[1]

  const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`${instagramId}`)
    .setStyle(ButtonStyle.Link)
.setURL(`https://www.instagram.com/${instagramId}`)
.setEmoji(`<:Instagram:1077992235691413554>`)
);
      const iembed = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle('Instagram ID')
	.setURL(`${config.embed.link}`)
 .setThumbnail(`${config.embed.logom}`)
	.setAuthor({ name: `${config.embed.name} Entertainment`, iconURL: `${config.embed.logo}` })
	.setDescription(`<:Instagram:1077992235691413554>〢**${message.author.username}**'s Instagram: [${instagramId}](https://www.instagram.com/${instagramId})`)
	.setImage('https://cdn.discordapp.com/attachments/1063038170779877479/1079021131958321182/20230225_161342.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      

    message.channel.send({ embeds: [iembed],components: [row] });
      message.delete()
  }
}




  