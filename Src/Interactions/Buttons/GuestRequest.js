const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

require('util').promisify(setTimeout);
module.exports = {
    name: "vmodal",
    run: async(client, interaction, container) => {
        const modal = new ModalBuilder()// We create a Modal
          .setCustomId('vform')
          .setTitle('Request Form | CaDilLac');
          const name = new TextInputBuilder()
              .setCustomId('vfname')
              .setLabel('Name For Here')
              .setStyle(TextInputStyle.Short)
              .setMinLength(3)
              .setMaxLength(20)
              .setPlaceholder('اسم خود را وارد کنید')
              .setRequired(true)
    const age = new TextInputBuilder()
              .setCustomId('vfage')
              .setLabel('Age For Here')
              .setStyle(TextInputStyle.Short)
              .setMinLength(1)
              .setMaxLength(2)
              .setPlaceholder('سن خود را وارد کنید')
              .setRequired(true)
      const inviter = new TextInputBuilder()
              .setCustomId('vfinviter')
              .setLabel('Inviter For Here')
              .setStyle(TextInputStyle.Short)
              .setMinLength(3)
              .setMaxLength(20)
              .setPlaceholder('اسم کسی که شما رو اینوایت کرده')
              .setRequired(true)
      const nickname = new TextInputBuilder()
              .setCustomId('vfnick')
              .setLabel('Nickname For Here')
              .setStyle(TextInputStyle.Short)
              .setMinLength(1)
              .setMaxLength(10)
              .setPlaceholder('نیک نیم مورد نظر داخل سرور رو وارد کنید')
              .setRequired(true)
        const ActionRow = new ActionRowBuilder().addComponents(name)
        const ActionRow1 = new ActionRowBuilder().addComponents(age);
        const ActionRow2 = new ActionRowBuilder().addComponents(inviter)
        const ActionRow3 = new ActionRowBuilder().addComponents(nickname)

        modal.addComponents(ActionRow,ActionRow1, ActionRow2,ActionRow3);

        await interaction.showModal(modal);
      }
    }
