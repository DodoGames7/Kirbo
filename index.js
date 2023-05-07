
const {AoiClient, LoadCommands, Util} = require('aoi.js')


const bot = new AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["c!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["Guilds", "MessageContent", "GuildMessages"], // the discord.js v14 intents
   events: ["onMessage", "onInteractionCreate"],
   aoiLogs: false, // don't show default aoi.js ready message
   aoiWarning: true, // don't show warnings of update
   database: { // use aoi.db for storing data
    type: "aoi.db",
    db: require("aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
        dbType: "KeyValue"
    },
}
});



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)

 const loader = new LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // enable discord status feature
bot.status({
  text: "type c!help for list of commands", // tells the user to use the help cmd
  type: 0, // use the type 0 aka "Playing"
  time: 12 // useless as this is only one status setup
})

// enable aoi.parser for the special Select menu
const { parse, createAst } = require("aoi.parser");
const { parseExtraOptions, parseComponents } = require("aoi.parser/components");
Util.parsers.ErrorHandler = parse;
Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
};
Util.parsers.ComponentParser = ( data ) => {
     return createAst( data ).children.map( parseComponents );
};