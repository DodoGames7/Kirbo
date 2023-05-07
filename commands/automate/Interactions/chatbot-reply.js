module.exports = {
    name: "$alwaysExecute",
    $if: "old",
    code: `
$cooldown[2s;]
$suppressErrors[hi there! something went wrong when reading your message, please try again later.]
$if[$getGuildVar[embed]==false]
$get[response]
$elseif[$getGuildVar[embed]==true]
$title[$username[$clientID]]
$description[$get[response]]
$color[d74894]
$endelseif
$endif
$let[response;$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[$message;encode]&owner=$uri[$username[$botOwnerid];encode]&botname=$uri[$username[$clientID];encode];response]]
$reply[$messageID;$getGuildVar[replyping]]
$botTyping
$onlyForChannels[$getGuildVar[chatbot];]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[chatbot]]==true;]
    `
    }

