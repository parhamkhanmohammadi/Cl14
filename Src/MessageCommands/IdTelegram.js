const { ButtonStyle } = require('discord.js')
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../Credentials/Embed")
module.exports = {
    name: 'tel',
    run: async (client, message, args, container) => {
let messageArry = message.content.split(" ")
  let rolecmd = messageArry[0]
  let instagramId = messageArry[1]

  const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`${instagramId}`)
    .setStyle(ButtonStyle.Link)
.setURL(`https://www.t.me/${instagramId}`)
.setEmoji(`<:telegram:1078678270184259614>`)
);
      const iembed = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle('Telegram ID')
	.setURL(`${config.embed.link}`)
 .setThumbnail('https://media.discordapp.net/attachments/1003601026458320920/1009813227435216926/discord-avatar-128-SVS7B.gif')
	.setAuthor({ name: 'CaDilLac Entertainment', iconURL: 'https://media.discordapp.net/attachments/1003601026458320920/1009488050474188891/1009270101909966918.webp' })
	.setDescription(`<:telegram:1078678270184259614>〢**${message.author.username}**'s Telegram: [${instagramId}](https://www.t.me/${instagramId})`)
	//.setImage('https://media.discordapp.net/attachments/1003601026458320920/1011875579559166042/1-instagram.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      

    message.channel.send({ embeds: [iembed],components: [row] });
      message.delete()
  }
}




  