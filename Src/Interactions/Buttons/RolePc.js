const config = require("../../Credentials/Bio")
module.exports = {
    name: "pc",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has(config.ID.pc)) {
      await member.roles.add(config.ID.pc)
      return interaction.reply({ content: `<@&${config.ID.pc}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.pc)) {
      await member.roles.remove(config.ID.pc)
      return interaction.reply({ content: `<@&${config.ID.pc}> Remove`, ephemeral: true });
 }
  }
    }