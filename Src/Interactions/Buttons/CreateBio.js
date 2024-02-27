const { ButtonStyle } = require('discord.js')
const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder  } = require("discord.js")
const config = require("../../Credentials/Bio")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "biov",
    run: async(client, interaction, container) => {
const embed = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle('Bio Selection')
	.setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}`})
	.setDescription('Select The  Bio Topic\n────────────────────\n موضوع بیو را انتخاب کنید')
	.addFields(
    		{ name: '**Bio Topic**', value: ` 「${config.emoji.platform}」↬ PlatForm \n 「${config.emoji.gender}」↬ Gender \n 「${config.emoji.relationship}」↬ RelationShip`})    		.setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097773789502263327/20230418_101021.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`PlatForm`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('platform')
.setEmoji(config.emoji.platformi),
          new ButtonBuilder()
    .setLabel(`Gender`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('gender')
.setEmoji(config.emoji.genderi),
           new ButtonBuilder()
    .setLabel(`RelationShip`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('relationship')
.setEmoji(config.emoji.relationshipi)
          )

 interaction.reply({ embeds: [embed], components: [row], ephemeral: true })
  }
}