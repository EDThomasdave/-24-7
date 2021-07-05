const Discord = require("discord.js")
const client = new Discord.Client

module.exports = async (client) => {
  client.Ready = true, 
  client.user.setActivity(`>>help '>>' (default prefix)
  Currently in ${client.guilds.cache.size} servers`, { type: "LISTENING" })
  
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};