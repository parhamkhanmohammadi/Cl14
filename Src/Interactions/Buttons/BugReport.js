const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

require('util').promisify(setTimeout);
module.exports = {
    name: "bugmodal",
    run: async(client, interaction, container) => {
        const modal = new ModalBuilder()// We create a Modal
          .setCustomId('verification-modal')
          .setTitle('Report Bug | RADAR');
          const something = new TextInputBuilder()
              .setCustomId('verification-input')
              .setLabel('REPORT TOPIC IS HERE')
              .setStyle(TextInputStyle.Short)
              .setMinLength(3)
              .setMaxLength(20)
              .setPlaceholder('موضوع باگ مورد نظر ')
              .setRequired(true)
    const something1 = new TextInputBuilder()
              .setCustomId('verification-input2')
              .setLabel('CONTENT TOPIC IS HERE')
              .setStyle(TextInputStyle.Paragraph)
              .setMinLength(3)
              .setMaxLength(400)
              .setPlaceholder('توضیحات بیشتر درباره باگ')
              .setRequired(true)
      
        const ActionRow = new ActionRowBuilder().addComponents(something)
        const ActionRow1 = new ActionRowBuilder().addComponents(something1);

        modal.addComponents(ActionRow,ActionRow1);

        await interaction.showModal(modal);
      }
    }
