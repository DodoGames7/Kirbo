module.exports = [{
  name: "chatbot",
  type: "interaction",
  prototype: "slash",
  code: `$setServerVar[chatbot;$slashOption[channel]]
  $setServerVar[isset;$slashOption[channel]]

$interactionReply[you can now talk with me in <#$slashOption[channel]>]

$onlyIf[$getServerVar[isset]!=$slashOption[channel];{
  "content": "you already let me talk in that channel",
  "ephemeral" : true,
  "options" : { "interaction" : true }
  }]
  
  $onlyPerms[manageserver;{
    "content": "$nonEscape[you need \`MANAGE_SERVER\` permission in order to use this]",
    "ephemeral" : true,
  "options" : { "interaction" : true }
  }]

$onlyIf[$interactionData[options._subcommand]==set;]
`
},{
  name: "chatbot",
  type: "interaction",
  prototype: "slash",
  code: `$setServerVar[chatbot;;$guildID]
  $setServerVar[isset;;$guildID]

  $interactionReply[alright! i no longer want to talk in that channel]
  
  $onlyIf[$getServerVar[chatbot]!=none;{
    "content": "you did not even allow me to talk in any channel to even do that!",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]

    $onlyPerms[manageserver;{
      "content": "$nonEscape[you need \`MANAGE_SERVER\` permission in order to use this]",
      "ephemeral" : true,
    "options" : { "interaction" : true }
    }]

    $onlyIf[$interactionData[options._subcommand]==reset;]
    `
},{
  name: "chatbot",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:Settings}{description:hey $username, you can manage me on how i should behave to internet people by checking the following settings:
    
    **embed**: switch to embed mode when replying
    **Reply Mention**: let's the bot ping you at every single reply
    
    Note: click on buttons to toggle options to re-enable or re-disable them}{color:d74894}};{actionRow:{button:Embed:primary:setting_$authorID:no}{button:Reply Mention:primary:replytoggle_$authorID:no}}]
    
    $onlyPerms[manageserver;{
      "content": "$nonEscape[you need \`MANAGE_SERVER\` Perm in order to manage me on how i should talk]",
      "ephemeral" : true,
    "options" : { "interaction" : true }
    }]

    $onlyIf[$interactionData[options._subcommand]==settings;]
    `
}]
