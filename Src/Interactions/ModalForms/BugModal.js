const { ButtonStyle } = require('discord.js');
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../../Credentials/Embed")
module.exports = {
    name: "verification-modal",
    run: async(DiscordClient, interaction) => {

      if (!interaction.isModalSubmit()) return;

	// Get the data entered by the user
	const response = interaction.fields.getTextInputValue('verification-input');
	const response2 = interaction.fields.getTextInputValue('verification-input2');
	
      interaction.reply({ content: `✅ Report Submitd !\nCheck <#1061275867772366929>`, ephemeral: true })
      
    const row = new ActionRowBuilder()
              .addComponents(
          new ButtonBuilder()
           .setLabel('Fixed It')
           .setStyle(ButtonStyle.Success)
            .setEmoji('<:verify:1078239822138835045>')
           .setCustomId('fixed'),
                  new ButtonBuilder()
                   .setLabel('Reject')
           .setStyle(ButtonStyle.Danger)
            .setEmoji('<:ignore:1078257945378304010>')
           .setCustomId('reject'),
              );
  
    const bugReport = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle(`New Bug: ${response}`)
	.setURL(`${config.embed.link}`)
 .setThumbnail(`${config.embed.logom}`)
	.setAuthor({ name: `${config.embed.name} DEV`, iconURL: `${config.embed.logo}`})
	.setDescription(`Report: ${response2}\n> **Report By**\n> <@${interaction.user.id}>`)
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
    
    const channel = DiscordClient.channels.cache.get('1061275867772366929')
    channel.send({ content: `<@${interaction.user.id}>/<@&1061275554155876432>`, embeds: [bugReport], components: [row] })
    }
}