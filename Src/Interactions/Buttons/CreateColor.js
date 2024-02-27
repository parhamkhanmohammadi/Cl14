const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require("discord.js")
const config = require("../../Credentials/Color")
const config1 = require("../../Credentials/Embed")
module.exports = {
    name: "colorv",
    run: async(client, interaction, container) => {
const embed = new EmbedBuilder()
	.setColor(`${config1.embed.color}`)
	.setTitle('Color Selection')
	.setURL(`${config1.embed.link}`)
      .setThumbnail(`${config1.embed.logom}`)
	.setAuthor({ name: `${config1.embed.name} ROLE`, iconURL: `${config1.embed.logo}`})
	.setDescription('Select Favorite Color In Menu \n────────────────────\nرنگ مورد علاقه را از لیست انتخاب کنید')
	.addFields(
    		{ name: '**Colors List**', value: `「${config.emoji.Black}」↬ <@&${config.ID.Black}> \n 「${config.emoji.White}」↬ <@&${config.ID.White}> \n 「${config.emoji.Gray}」↬ <@&${config.ID.Gray}> \n 「${config.emoji.Darkblue}」↬ <@&${config.ID.Darkblue}> \n 「${config.emoji.Blue}」↬ <@&${config.ID.Blue}> \n 「${config.emoji.Sky}」↬ <@&${config.ID.Sky}> \n 「${config.emoji.Darkgreen}」↬ <@&${config.ID.Darkgreen}> \n 「${config.emoji.Green}」↬ <@&${config.ID.Green}> \n 「${config.emoji.Palegreen}」↬ <@&${config.ID.Palegreen}> \n 「${config.emoji.Lemon}」↬ <@&${config.ID.Lemon}> \n 「${config.emoji.Yellow}」↬ <@&${config.ID.Yellow}> `}, 
    		{ name: '**Color List**', value: `「${config.emoji.Golden}」↬ <@&${config.ID.Golden}> \n 「${config.emoji.Orange}」↬ <@&${config.ID.Orange}> \n 「${config.emoji.Darkorange}」↬ <@&${config.ID.Darkorange}> \n 「${config.emoji.Red}」↬ <@&${config.ID.Red}> \n 「${config.emoji.Darkred}」↬ <@&${config.ID.Darkred}> \n 「${config.emoji.Darkpink}」↬ <@&${config.ID.Darkpink}> \n 「${config.emoji.Pink}」↬ <@&${config.ID.Pink}> \n 「${config.emoji.Palepink}」↬ <@&${config.ID.Palepink}> \n 「${config.emoji.PalePurple}」↬ <@&${config.ID.PalePurple}>  \n 「${config.emoji.Purple}」↬ <@&${config.ID.Purple}> \n 「${config.emoji.Boldpurple}」↬ <@&${config.ID.Boldpurple}>`})
    		.setImage('https://cdn.discordapp.com/attachments/1060182216354824233/1097733397897564182/20230418_072948.gif')
	.setFooter({ text: '</> | ΛЯΛ', iconURL: 'https://media.discordapp.net/attachments/955670235606843402/955670431996710942/InShot_20220322_074517055.jpg' });

    const row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setCustomId('colorrole')
      .setPlaceholder('Select Color To Add/Remove')
      .addOptions([
        {
          label: '₹ | Black',
          description: "Click To Add/Remove Black color",
          value: 'Black',
          emoji : `${config.emoji.Blacki}`
        },
        {
          label: '₹ | White',
          description: "Click To Add/Remove White color",
          value: 'White',
          emoji : `${config.emoji.Whitei}`
        },
        {
          label: '₹ | Gray',
          description: "Click To Add/Remove gray color",
          value: 'Gray',
          emoji : `${config.emoji.Grayi}`
        },
        {
          label: '₹ | Dark Blue',
          description: "Click To Add/Remove Dark Blue color",
          value: 'Darkblue',
          emoji : `${config.emoji.Darkbluei}`
        },
        {
          label: '₹ | Blue',
          description: "Click To Add/Remove Blue color",
          value: 'Blue',
          emoji : `${config.emoji.Bluei}`
        },
        {
          label: '₹ | Sky',
          description: "Click To Add/Remove Sky color",
          value: 'Sky',
          emoji : `${config.emoji.Skyi}`
        },
        {
          label: '₹ | Dark Green',
          description: "Click To Add/Remove Dark Green color",
          value: 'Darkgreen',
          emoji : `${config.emoji.Darkgreeni}`
        },
        {
          label: '₹ | Green',
          description: "Click To Add/Remove Green color",
          value: 'Green',
          emoji : `${config.emoji.Greeni}`
        },
        {
          label: '₹ | Pale Green',
          description: "Click To Add/Remove Pale Green color",
          value: 'Palegreen',
          emoji : `${config.emoji.Palegreeni}`
        },
        {
          label: '₹ | Lemon',
          description: "Click To Add/Remove Lemon color",
          value: 'Lemon',
          emoji : `${config.emoji.Lemoni}`
        },
        {
          label: '₹ | Golden',
          description: "Click To Add/Remove Golden color",
          value: 'Golden',
          emoji : `${config.emoji.Goldeni}`
        },
        {
          label: '₹ | Orange',
          description: "Click To Add/Remove Orange color",
          value: 'Orange',
          emoji : `${config.emoji.Orangei}`
        },
        {
          label: '₹ | Dark Orange',
          description: "Click To Add/Remove Dark Orange color",
          value: 'Darkorange',
          emoji : `${config.emoji.Darkorangei}`
        },
        {
          label: '₹ | Red',
          description: "Click To Add/Remove Red color",
          value: 'Red',
          emoji : `${config.emoji.Redi}`
        },
        {
          label: '₹ | Dark Red',
          description: "Click To Add/Remove Dark Red color",
          value: 'Darkred',
          emoji : `${config.emoji.Darkredi}`
        },
        {
          label: '₹ | Dark Pink',
          description: "Click To Add/Remove Dark Pink color",
          value: 'Darkpink',
          emoji : `${config.emoji.Darkpinki}`
        },
        {
          label: '₹ | Pink',
          description: "Click To Add/Remove Pink color",
          value: 'Pink',
          emoji : `${config.emoji.Pinki}`
        },
        {
          label: '₹ | Pale Pink',
          description: "Click To Add/Remove Pale Pink color",
          value: 'Palepink',
          emoji : `${config.emoji.Palepinki}`
        },
        {
          label: '₹ | Pale Purple',
          description: "Click To Add/Remove Pale Purple color",
          value: 'Palepurple',
          emoji : `${config.emoji.PalePurplei}`
        },
        {
          label: '₹ | Purple',
          description: "Click To Add/Remove Purple color",
          value: 'Purple',
          emoji : `${config.emoji.Purplei}`
        },
        {
          label: '₹ | Bold Purple',
          description: "Click To Add/Remove Bold Purple color",
          value: 'Boldpurple',
          emoji : `${config.emoji.Boldpurplei}`
        },
        {
          label: 'REMOVE COLOR',
          description: "Click To Remove All Color",
          value: 'removec',
          emoji : `1078257945378304010`
        }
        ]),
      );
      await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  }
}