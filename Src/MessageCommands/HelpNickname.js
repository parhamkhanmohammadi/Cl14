module.exports = {
    name: "rnic",
    allowInDms: true,
    aliases: ["rnic"],
    run: async(client, message, args) => {
        if (!message.member.nickname) return message.channel.send("You don't have any nickname set.");
    message.member.setNickname("").then(member => {
        message.channel.send("Your nickname has been reset.");
    }).catch(e => {
        console.log(e);
        message.channel.send("Couldn't reset your nickname.");
    })
    }
};