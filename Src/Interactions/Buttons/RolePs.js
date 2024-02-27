const config = require("../../Credentials/Bio")
module.exports = {
    name: "ps",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has(config.ID.ps)) {
      await member.roles.add(config.ID.ps)
      return interaction.reply({ content: `<@&${config.ID.ps}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.ps)) {
      await member.roles.remove(config.ID.ps)
      return interaction.reply({ content: `<@&${config.ID.ps}> Remove`, ephemeral: true });
 }
  }
    }