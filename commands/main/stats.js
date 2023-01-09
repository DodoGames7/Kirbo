module.exports = {
    name: "stats",
    code: `$title[bot info about $username[$clientID]]
    $addField[User Count;$allMembersCount;yes]
    $addField[Server Count;$serverCount;yes]
    $addField[Node.js;$nodeVersion;yes]
    $addField[Cpu;$cpu;yes]
    $addField[Ram;$round[$ram];yes]
    $addField[Ping;$pingms;yes]
    $addField[Version;v3.0.4-alpha;yes]
    $addField[Uptime;$uptime[humanize];yes]
    $addField[Library;Aoi.js;yes]
    `
    }