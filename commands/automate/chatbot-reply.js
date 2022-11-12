module.exports = {
    name: "$alwaysExecute",
    $if: "v4",
    code: `$if[$getServerVar[embed]==false]
$cooldown[2s;Woah!, slow down!, don't spam too fast you can break me by doing that!]
    $reply[$messageID;$getServerVar[replyping]]
$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[$message;encode]&owner=$uri[$username[$botOwnerid];encode]&botname=$uri[$username[$clientID];encode];response]
    
    
    $onlyForChannels[$getServerVar[chatbot];]
    $suppressErrors[hi there! something went wrong when reading your message please try again.]
$else
$if[$getServerVar[embed]==true]
$reply[$messageID;$getServerVar[replyping]]
$cooldown[2s;Woah!, slow down!, don't spam too fast you can break me by doing that!]
$title[$username[$clientID]]
$description[$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[$message;encode]&owner=$uri[$username[$botOwnerid];encode]&botname=$uri[$username[$clientID];encode];response]]
$color[d74894]
$onlyForChannels[$getServerVar[chatbot];]
$suppressErrors[hi there! something went wrong when reading your message please try again.]
$endif
$endif

    `
    }

