const Discord = require("discord.js");
const config = require('./config.json')
const client = new Discord.Client()



client.on("ready", () =>{ //discordusername#1234
    console.log(`Bot has started as : ${client.user.tag}`);

})

const jointocreate = require('./jointocreate')
jointocreate(client)



client.login(config.token);
