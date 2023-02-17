
const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["c!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["Guilds", "MessageContent", "GuildMessages"], // the discord.js v14 intents
   events: ["onMessage", "onInteractionCreate"],
   aoiLogs: false,
   aoiWarning: true,
   respondToBots: false
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)

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

// parser support
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");

setup(Util);
