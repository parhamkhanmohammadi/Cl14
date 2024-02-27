const { ButtonStyle } = require('discord.js');
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const font = require ("../../Credentials/Font")
const config1 = require("../../Credentials/Embed")
const {letterTrans} = require ("custom-translate")
module.exports = {
    name: "vform",
    run: async(DiscordClient, interaction) => {
      function fnic(text) {
        return letterTrans(text, font, "")
      }

      if (!interaction.isModalSubmit()) return;

	// Get the data entered by the user
	const name = interaction.fields.getTextInputValue('vfname');
	const age = interaction.fields.getTextInputValue('vfage');
  const inviter = interaction.fields.getTextInputValue('vfinviter');
  const nick = interaction.fields.getTextInputValue('vfnick');


  const row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
    .setLabel(`VOICE¹`)
    .setStyle(ButtonStyle.Link)
.setURL(`https://discord.gg/4Xw9RmRP53`)
.setEmoji(`<:voice:1078946940445806613>`),
          new ButtonBuilder()
    .setLabel(`VOICE²`)
    .setStyle(ButtonStyle.Link)
.setURL(`https://discord.gg/9x23Z96T`)
.setEmoji(`<:voice:1078946940445806613>`)
)
	
      interaction.reply({ content: `<:verify:1078239822138835045> | فرم برای ادمین ها ارسال شد داخل ویس ها منتظر ادمین باشید تا تایید کنند`,components: [row1], ephemeral: true })
      
    const row = new ActionRowBuilder()
              .addComponents(
          new ButtonBuilder()
           .setLabel('Verify')
           .setStyle(ButtonStyle.Success)
            .setEmoji('<:verify:1078239822138835045>')
           .setCustomId('averify'),
          new ButtonBuilder()
                   .setLabel('Reject')
           .setStyle(ButtonStyle.Danger)
            .setEmoji('<:ignore:1078257945378304010>')
           .setCustomId('areject')
                )
    const bugReport = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle(`New Request Member`)
	.setURL(`${config1.embed.link}`)
 .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} Welcomer`, iconURL: `${config1.embed.logo}`})
	.setDescription(`Member: ${interaction.user.id}`)
      .addFields(
		{ name: 'NAME', value: `${name}`, inline: true },
		{ name: 'AGE', value: `${age}`,inline: true },
		{ name: 'INVITER', value: `${inviter}`, inline: true }
	)
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

                                
    const channel = DiscordClient.channels.cache.get('1061275721454063626')
    channel.send({ content: `<@${interaction.user.id}>/<@&1077651414177816697>`, embeds: [bugReport], components: [row] })
      const member = await interaction.guild.members.fetch(interaction.user.id)
     member.setNickname("₹ " + fnic(`${nick}`))
    }
}