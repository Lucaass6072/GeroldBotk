const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "OTUwNDIxNTEzMjIyMzY1MjE0.YiYrAg.HOpiURyiyZAUYt7q-cAcqN8hHE4", //Discord Bot Token
prefix:".",
})
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code
})

bot.readyCommand({
    channel: "950411629454057502", //You can use this or not
    code: `Online $log[ 🍕 | Onlie Com $userTag[$clientID]]` //Example Ready on Client
})

bot.loadCommands(`./Comandos/`) //Allows Commands executed by `commands` folder
bot.variables(require('./Comandos/vars.js'))

bot.command({
    name: "ev",
    code: `
$eval[$message]`
})
