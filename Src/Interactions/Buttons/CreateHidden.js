const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require("discord.js")
const config = require("../../Credentials/Hidden")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "hiddenv",
    run: async(client, interaction, container) => {
    const embed = new EmbedBuilder()
      .setColor(`${config1.embed.color}`)
      .setTitle('Hidden Selctor')
      .setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
      .setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}` })
      .setDescription('Select To Hidden Section In Menu \n────────────────────\n انتخاب کنید برای مخفی کردن سکشن')
      .addFields(
        { name: '**Hidden List**', value: `「${config.emoji.hidden}」↬ <@&${config.ID.event}> \n 「${config.emoji.hidden}」↬ <@&${config.ID.grate}> \n 「${config.emoji.hidden}」↬ <@&${config.ID.adult}> \n 「${config.emoji.hidden}」↬ <@&${config.ID.game}> \n 「${config.emoji.hidden}」↬ <@&${config.ID.mafia}> \n 「${config.emoji.hidden}」↬ <@&${config.ID.radio}> \n`})
      .setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097742377357156443/20230418_080549.gif')
      .setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

    const row = new ActionRowBuilder()
      .addComponents(
        new SelectMenuBuilder()
          .setCustomId('hiddenrole')
          .setPlaceholder('Select Hidden Role To Add/Remove')
          .addOptions([
            {
              label: '₹ | Hidden Event',
              description: "Click To Add/Remove Hidden Event",
              value: 'event',
              emoji: `${config.emoji.hiddeni}`
            },
            {
              label: '₹ | Hidden G-Rate',
              description: "Click To Add/Remove Hidden G-Rate",
              value: 'grate',
              emoji: `${config.emoji.hiddeni}`
            },
            {
              label: '₹ | Hidden Adult',
              description: "Click To Add/Remove Hidden Adult",
              value: 'adult',
              emoji: `${config.emoji.hiddeni}`
            },
            {
              label: '₹ | Hidden Game',
              description: "Click To Add/Remove Hidden Game",
              value: 'game',
              emoji: `${config.emoji.hiddeni}`
            },
            {
              label: '₹ | Hidden Mafia',
              description: "Click To Add/Remove Hidden Mafia",
              value: 'mafia',
              emoji: `${config.emoji.hiddeni}`
            },
            {
              label: '₹ | Hidden Radio',
              description: "Click To Add/Remove Hidden Radio",
              value: 'radio',
              emoji: `${config.emoji.hiddeni}`
            }
          ]),
      );
  interaction.reply({ embeds: [embed], components: [row], ephemeral: true });

  }
}