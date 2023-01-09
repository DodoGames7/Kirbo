module.exports = {
    name: "resetchatbot",
    code: `$setServerVar[chatbot;;$guildID]
           $setServerVar[isset;;$guildID]
    alright! i no longer want to talk in that channel
    $onlyIf[$getServerVar[chatbot]!=none;you did not even allow me to talk in any channel to even do that!]
    $onlyPerms[manageserver;you need \`ManageServer\` permission in order to use this]
    `
  }