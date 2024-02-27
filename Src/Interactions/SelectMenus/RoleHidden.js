const config = require("../../Credentials/Hidden")
module.exports = {
    name: "hiddenrole",
    run: async(client, interaction, container) => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
//Hidden Event
  if(interaction.values == 'event')
  {
    if(!member.roles.cache.has(config.ID.event)) {
      await member.roles.add(config.ID.event)
      return interaction.reply({ content:  `<@&${config.ID.event}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.event)) {
      await member.roles.remove(config.ID.event)
      return interaction.reply({ content: `<@&${config.ID.event}> Remove`, ephemeral: true });
    }
  }
 //Hidden grate
  if(interaction.values == 'grate')
  {
    if(!member.roles.cache.has(config.ID.grate)) {
      await member.roles.add(config.ID.grate)
      return interaction.reply({ content:  `<@&${config.ID.grate}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.grate)) {
      await member.roles.remove(config.ID.grate)
      return interaction.reply({ content: `<@&${config.ID.grate}> Remove`, ephemeral: true });
    }
  }
//Hidden adult
  if(interaction.values == 'adult')
  {
    if(!member.roles.cache.has(config.ID.adult)) {
      await member.roles.add(config.ID.adult)
      return interaction.reply({ content:  `<@&${config.ID.adult}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.adult)) {
      await member.roles.remove(config.ID.adult)
      return interaction.reply({ content: `<@&${config.ID.event}> Remove`, ephemeral: true });
    }
  }
//Hidden game
  if(interaction.values == 'game')
  {
    if(!member.roles.cache.has(config.ID.game)) {
      await member.roles.add(config.ID.game)
      return interaction.reply({ content:  `<@&${config.ID.game}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.game)) {
      await member.roles.remove(config.ID.game)
      return interaction.reply({ content: `<@&${config.ID.game}> Remove`, ephemeral: true });
    }
  }
//Hidden mafia
  if(interaction.values == 'mafia')
  {
    if(!member.roles.cache.has(config.ID.mafia)) {
      await member.roles.add(config.ID.mafia)
      return interaction.reply({ content:  `<@&${config.ID.mafia}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.mafia)) {
      await member.roles.remove(config.ID.mafia)
      return interaction.reply({ content: `<@&${config.ID.mafia}> Remove`, ephemeral: true });
    }
  }
//Hidden radio
  if(interaction.values == 'radio')
  {
    if(!member.roles.cache.has(config.ID.radio)) {
      await member.roles.add(config.ID.radio)
      return interaction.reply({ content:  `<@&${config.ID.radio}> Add`, ephemeral: true });
    } else if(member.roles.cache.has(config.ID.radio)) {
      await member.roles.remove(config.ID.radio)
      return interaction.reply({ content: `<@&${config.ID.radio}> Remove`, ephemeral: true });
    }
  }
}
}