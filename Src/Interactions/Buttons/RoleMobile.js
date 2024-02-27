const config = require("../../Credentials/Bio")
module.exports = {
    name: "mobile",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has(config.ID.mobile)) {
      await member.roles.add(config.ID.mobile)
      return interaction.reply({ content: `<@&${config.ID.mobile}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.mobile)) {
      await member.roles.remove(config.ID.mobile)
      return interaction.reply({ content: `<@&${config.ID.mobile}> Remove`, ephemeral: true });
 }
  }
    }