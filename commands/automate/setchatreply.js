module.exports = {
    name: "channelselect",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[chatbot;$interactionData[values[0]];$guildID]
           $setGuildVar[isset;$interactionData[values[0]];$guildID]
    $interactionReply[you can now talk with me in <#$interactionData[values[0]]>;;;;all;true]
    $onlyIf[$getGuildVar[isset]!=$interactionData[values[0]];you already let me talk in that channel
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}]`
}