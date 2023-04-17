module.exports = {
    name: "resetchatbot",
    aliases: "resetchat",
    code: `$setGuildVar[chatbot;;$guildID]
           $setGuildVar[isset;;$guildID]
    alright! i no longer want to talk in that channel
    $onlyIf[$getGuildVar[chatbot]!=none;you did not even allow me to talk in any channel to even do that!]
    $onlyPerms[manageguild;you need \`ManageServer\` permission in order to use this]
    `
  }