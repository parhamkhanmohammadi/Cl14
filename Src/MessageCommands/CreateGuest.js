const { ButtonStyle } = require('discord.js');
const {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
  } = require('discord.js');
const config = require("../Credentials/Embed")
module.exports = {
    name: 'newc',
  ownerOnly: true,
    run: async (client, message, args, container) => {
      
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
    .setCustomId('vmodal')
    .setLabel('Request Verify')
    .setStyle(ButtonStyle.Success)
    .setEmoji('1078239822138835045')
);
          
      const ebug = new EmbedBuilder()
	.setColor(`${config.embed.color}`)
	.setTitle(`WelCome To ${config.embed.name}`)
	.setURL(`${config.embed.link}`)
 .setThumbnail(`${config.embed.logom}`)
	.setAuthor({ name: `${config.embed.name} WelComer`, iconURL: `${config.embed.logo}`})
	.setDescription('Click The <:verify:1078239822138835045> Button To Request For Verify \n────────────────────\n دکمه <:verify:1078239822138835045> رو بزنید تا فرم وریفای رو پر کنید')
	.setImage('https://cdn.discordapp.com/attachments/1063038170779877479/1078934588073705552/20230225_102849.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });
      
      message.channel.send({embeds: [ebug], components: [row]})
  }
    }
    
