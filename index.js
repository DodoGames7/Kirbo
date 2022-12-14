
const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["c!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["GUILDS", "GUILD_MESSAGES"], // the discord.js intents
   database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"],
    extraOptions: {
      dbType: "KeyValue",
    },
  }
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)
require('./handlers/callbacks')(bot) // for loading most callbacks used in bot 

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // enable discord status feature
bot.status({
  text: "type c!help for list of commands",
  type: "PLAYING",
  time: 12
})

