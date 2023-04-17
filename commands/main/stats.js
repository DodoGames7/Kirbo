module.exports = {
    name: "stats",
    info: {
        description: "returns stats information about the bot"
      },
    aliases: "botinfo",
    code: `$title[bot info about $username[$clientID]]
    $addField[User Count;$allMembersCount;true]
    $addField[Server Count;$guildCount;true]
    $addField[Node.js;$nodeVersion;true]
    $addField[Cpu;$cpu;true]
    $addField[Ram;$round[$ram]%;true]
    $addField[Ping;$pingms;true]
    $addField[Version;v3.0.4-preview;true]
    $addField[Uptime;$uptime[humanize];true]
    $addField[Library;Aoi.js;true]
    `
    }