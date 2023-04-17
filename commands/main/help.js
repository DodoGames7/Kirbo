module.exports = {
    name: "help",
    code: `$title[Help Commands]
    $addField[version;$commandInfo[version;info.description]]
    $addField[settings;$commandInfo[settings;info.description]]
    $addField[support;$commandInfo[support;info.description];false]
    $addField[stats;$commandInfo[stats;info.description];false]
    $addField[resetchatbot;$commandInfo[resetchatbot;info.description];false]
    $addField[setchatbot;$commandInfo[setchatbot;info.description];false]
    `
    
    }