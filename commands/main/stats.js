module.exports = {
    name: "stats",
    code: `$title[bot info about $username[$clientID]]
    $description[
    User Count: **$allMembersCount**
    Server Count: **$serverCount
    Node.js: **$nodeVersion**
    Cpu: \`$cpu\`
    Ping: \`$ping\`ms
    Version: 3.0.3-alpha
    Uptime: $uptime[humanize]
    Library: Aoi.js
    ]
    `
    }
