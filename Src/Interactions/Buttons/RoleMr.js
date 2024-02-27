const config = require("../../Credentials/Bio")
module.exports = {
    name: "mr",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })

      if(interaction.member.roles.cache.has(config.ID.mr))await interaction.member.roles.remove(config.ID.mr)
        if(interaction.member.roles.cache.has(config.ID.miss))await interaction.member.roles.remove(config.ID.miss)
      await interaction.member.roles.add(config.ID.mr)
        interaction.reply({ content: `We Give <@&${config.ID.mr}> For You`, ephemeral: true })
  }
    }