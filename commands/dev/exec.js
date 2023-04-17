module.exports = {
    name: "execute",
    aliases: "exec",
    code: `
    \`\`\`
    $exec[$message]
    \`\`\`
    $onlyIf[$message!=;give me something to execute.]
    $onlyForIDS[$botOwnerid;]
    `
    }