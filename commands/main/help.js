module.exports = {
    name: "help",
    code: `$title[Help Commands]
    $addField[version;$commandInfo[version;info.description]
    Aliases: \`ver\`, \`changelog\`]
    $addField[settings;$commandInfo[settings;info.description]]
    $addField[support;$commandInfo[support;info.description];false]
    $addField[stats;$commandInfo[stats;info.description]
    Aliases: \`botinfo\` ;false]
    $addField[resetchatbot;$commandInfo[resetchatbot;info.description]
    Aliases: \`resetchat\`;false]
    $addField[setchatbot;$commandInfo[setchatbot;info.description]
    Aliases: \`setchat\`;false]
    `
    
    }