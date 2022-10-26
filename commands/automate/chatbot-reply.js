module.exports = {
    name: "$alwaysExecute",
    code: `$cooldown[2s;Woah!, slow down!, don't spam too fast you can break me by doing that!]
    $reply[$messageID;no]
    $jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[$message;encode]&owner=$uri[$username[$botOwnerid];encode]&botname=$uri[$username[$clientID];encode];response]
    
    
    $onlyForChannels[$getServerVar[chatbot];]
    $suppressErrors[hi there! something went wrong when reading your message please try again or wait later.]
    `
    }
