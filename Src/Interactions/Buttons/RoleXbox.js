const config = require("../../Credentials/Bio")
module.exports = {
    name: "xbox",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
if(!member.roles.cache.has(config.ID.xbox)) {
      await member.roles.add(config.ID.xbox)
      return interaction.reply({ content: `<@&${config.ID.xbox}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.xbox)) {
      await member.roles.remove(config.ID.xbox)
      return interaction.reply({ content: `<@&${config.ID.xbox}> Remove`, ephemeral: true });
 }
  }
    }