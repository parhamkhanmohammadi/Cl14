module.exports = {
  name: "averify",
  run: async (client, interaction, container) => {
    const member = await interaction.message.guild.members.fetch({
      user: interaction.user.id,
      force: true
    })
    const idmember = interaction.message.mentions.members.first().id
    const guild = client.guilds.cache.get('833237381381095444');
    const nmember = await guild.members.fetch(idmember);
    nmember.roles.remove('1061275669050429490')
    nmember.roles.add('1061275666978459678')

    return interaction.reply({ content: `<@${idmember}> وری فای شد توسط <@${interaction.member.id}>` });

  }
}