module.exports = {
name: "eval",
aliases: "e",
code: `$eval[$message]
$onlyIf[$message!=;Give me something to eval.]
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}