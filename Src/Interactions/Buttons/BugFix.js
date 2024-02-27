module.exports = {
    name: "fixed",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
            if (!interaction.isButton()) return;
  
      if (interaction.customId == "fixed") {
          if (interaction.member.roles.cache.find(r => r.id === '1061275554155876432')) {
            interaction.reply({ content: `✅ Fixed Bug By <@${interaction.member.id}> !` })
            
      } else {
            interaction.reply({ content: `You Dont Have Permission`, ephemeral: true });
      }
      }
      }
}