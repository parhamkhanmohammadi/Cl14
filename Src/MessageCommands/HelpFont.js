const font = require ("../Credentials/Font")
const {letterTrans} = require ("custom-translate")
module.exports = {
    name: "font",
    allowInDms: true,
    aliases: ["font"],
    run: async(client, message, args) => {
      function fnic(text) {
        return letterTrans(text, font, "")
      }
        message.channel.send(fnic(args.slice(0).join("")))
    }
}