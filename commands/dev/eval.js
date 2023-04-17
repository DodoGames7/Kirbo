module.exports = {
name: "eval",
aliases: "e",
code: `$eval[$message]
$onlyIf[$message!=;give me something to eval.]
$onlyForIDS[$botOwnerid;]
`
}