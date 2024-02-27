const { ButtonStyle } = require('discord.js')
const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder  } = require("discord.js")
const config = require("../../Credentials/Bio")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "platform",
    run: async(client, interaction, container) => {
const embed = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle('PlatForm Selection')
	.setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}`})
	.setDescription('Select The Platform\n────────────────────\n پلتفرم را انتخاب کنید')
	.addFields(
    		{ name: '**Platform Selection**', value: ` 「${config.emoji.mobile}」↬ <@&${config.ID.mobile}> \n 「${config.emoji.pc}」↬ <@&${config.ID.pc}> \n 「${config.emoji.ps}」↬ <@&${config.ID.ps}> \n 「${config.emoji.xbox}」↬ <@&${config.ID.xbox}>`})    		.setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097772769040674856/20230418_100614.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`Mobile`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('mobile')
.setEmoji(config.emoji.mobilei),
          new ButtonBuilder()
    .setLabel(`PC`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('pc')
.setEmoji(config.emoji.pci),
           new ButtonBuilder()
    .setLabel(`PlayStation`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('ps')
.setEmoji(config.emoji.psi),
           new ButtonBuilder()
    .setLabel(`XBox`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('xbox')
.setEmoji(config.emoji.xboxi)
          )

 interaction.reply({ embeds: [embed], components: [row], ephemeral: true })
  }
}