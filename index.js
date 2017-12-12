const { Client } = require("discord.js")
const client = new Client({
    disableEveryone: true,
    autoReconnect: true
});
const snekfetch = require('snekfetch');
const fs = require("fs");
const config = require("./assets/modules/config.json");
const logger = require("./assets/modules/logger.js");
var weather = require('weather-js');

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        let commandFile = require(`./assets/commands/${command}.js`);
        commandFile.run(client, message, args, config);
        logger.notify("Ran command")
    } catch (err) {
        logger.error(err);
    }
});

client.login(config.token);
