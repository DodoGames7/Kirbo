module.exports = {
    name: "execute",
    aliases: "exec",
    code: `
    \`\`\`
    $exec[$message]
    \`\`\`
    $onlyIf[$message!=;Give me something to execute.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
    }