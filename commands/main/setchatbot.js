module.exports = {
    name: "setchatbot",
    aliases: "setchat",
    code: `
           $sendMessage[{newEmbed:{title:Choose a Channel}{description:click on the Select menu to choose an channel for me to talk!}{color:d74894}}
            {actionRow:{channelInput:channelselect_$authorID:make a selection:1:1:no:{channelType:0}}}]
      $onlyPerms[manageguild;you need \`ManageServer\` permission in order to use this]
      
      
      `
    }