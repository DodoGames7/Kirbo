module.exports = {
    name: "setchatbot",
    code: `$setServerVar[chatbot;$mentionedChannels[1]]
           $setServerVar[isset;$mentionedChannels[1]]
         you can now talk with me in <#$mentionedChannels[1]>
      $onlyPerms[manageguild;you need \`ManageServer\` permission in order to use this]
      $onlyIf[$channelType[$mentionedChannels[1;yes]]!=voice;the mentioned channel you set there is not text-based]
      $onlyIf[$getServerVar[isset]!=$mentionedChannels[1]; you already let me talk in that channel]
      $argsCheck[1;please mention a channel to set]
      `
    }