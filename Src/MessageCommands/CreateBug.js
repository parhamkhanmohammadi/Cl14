const { ButtonStyle } = require('discord.js');
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../Credentials/Embed")
module.exports = {
    name: 'bugc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
      
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
    .setCustomId('bugmodal')
    .setLabel('Bug Report')
    .setStyle(ButtonStyle.Danger)
    .setEmoji('1082412099961110538')
);
          
      const ebug = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle('Bug Report')
	.setURL(`${config.embed.link}`)
 .setThumbnail(`${config.embed.logom}`)
	.setAuthor({ name: `${config.embed.name} DEV`, iconURL: `${config.embed.logo}`})
	.setDescription('Click The <:bugg:1082412099961110538> Button To Report A Bug \n────────────────────\n دکمه <:bugg:1082412099961110538> رو بزنید تا باگ را ارسال کنید')
	.setImage('https://cdn.discordapp.com/attachments/1063038170779877479/1082413958612402196/20230307_005555.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [ebug], components: [row]})
  }
    }
    
