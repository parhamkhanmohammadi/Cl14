const config = require("../../Credentials/Bio")
module.exports = {
    name: "inrell",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })

      if(interaction.member.roles.cache.has(config.ID.single))await interaction.member.roles.remove(config.ID.single)
        if(interaction.member.roles.cache.has(config.ID.serching))await interaction.member.roles.remove(config.ID.serching)

if(interaction.member.roles.cache.has(config.ID.inrell))await interaction.member.roles.remove(config.ID.inrell)

if(interaction.member.roles.cache.has(config.ID.married))await interaction.member.roles.remove(config.ID.married)
      await interaction.member.roles.add(config.ID.inrell)
        interaction.reply({ content: `We Give <@&${config.ID.inrell}> For You`, ephemeral: true })
  }
    }