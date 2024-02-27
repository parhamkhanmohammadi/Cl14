const { ButtonStyle } = require('discord.js')
const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder  } = require("discord.js")
const config = require("../../Credentials/Bio")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "gender",
    run: async(client, interaction, container) => {
const embed = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle('Gender Selection')
	.setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}`})
	.setDescription('Select The Gender\n────────────────────\n جنسیت خود را انتخاب کنید')
	.addFields(
    		{ name: '**Gender Selection**', value: ` 「${config.emoji.mr}」↬ <@&${config.ID.mr}> \n 「${config.emoji.miss}」↬ <@&${config.ID.miss}>`})    		.setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097781889999323216/20230418_104033.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`MR`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('mr')
.setEmoji(config.emoji.mri),
          new ButtonBuilder()
    .setLabel(`MISS`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('miss')
.setEmoji(config.emoji.missi)
          )

 interaction.reply({ embeds: [embed], components: [row], ephemeral: true })
  }
}