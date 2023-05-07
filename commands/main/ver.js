module.exports = {
    name: "version",
    info: {
        description: "View Kirbo's Current Update"
      },
    aliases: ["ver", "changelog"],
    code: `$title[Version: 3.0.4 (second preview Release)]
    $description[Long time ago since Kirbo was being stuck on v5, we're back again

    **Changes**
    \`setchatbot\` now uses select menu for channels.
    Show aliases that you can use for the other commands.

    **Fixes**
    Make chatbot reply system being unable to send anything in other channels if the channel which was set for the bot has been deleted.
    Updated aoi.js to the latest including djs to fix bugs on the old main version.
    Fixed some grammar.

    **Pending to be fixed**
    New chatbot api for the bot.

    **Message from the dev**
    I apologise for not maintaining Kirbo for months, i was busy with other stuff including maintaining other important bots. Sorry if you got annoyed because of this.
    ]
    $color[d74894]
    `
    }
