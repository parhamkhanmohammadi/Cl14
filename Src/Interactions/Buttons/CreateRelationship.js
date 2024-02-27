const { ButtonStyle } = require('discord.js')
const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder  } = require("discord.js")
const config = require("../../Credentials/Bio")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "relationship",
    run: async(client, interaction, container) => {
const embed = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle('RelationShip Selection')
	.setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}`})
	.setDescription('Specify your marital status \n────────────────────\nوضعیت تاهل خود را مشخص کنید ')
	.addFields(
    		{ name: '**Relationship **', value: ` 「${config.emoji.single}」↬ <@&${config.ID.single}> \n 「${config.emoji.serching}」↬ <@&${config.ID.serching}> \n 「${config.emoji.inrell}」↬ <@&${config.ID.inrell}> \n 「${config.emoji.married}」↬ <@&${config.ID.married}>`})    		.setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097772769040674856/20230418_100614.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`Single`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('single')
.setEmoji(config.emoji.singlei),
          new ButtonBuilder()
    .setLabel(`Serching For Rell`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('serching')
.setEmoji(config.emoji.serchingi),
           new ButtonBuilder()
    .setLabel(`In Rell`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('inrell')
.setEmoji(config.emoji.inrelli),
           new ButtonBuilder()
    .setLabel(`Married`)
    .setStyle(ButtonStyle.Primary)
    .setCustomId('married')
.setEmoji(config.emoji.marriedi)
          )

 interaction.reply({ embeds: [embed], components: [row], ephemeral: true })
  }
}