module.exports = [{
    name: "settings",
    info: {
        description: "manage kirbo's chatbot settings"
      },
    code: `$title[Settings]
    $description[hey $username, you can manage me on how i should behave to internet people by checking the following settings:
    
    **embed**: switch to embed mode when replying
    **Reply Mention**: let's the bot ping you at every single reply
    
    Note: click on buttons to toggle options to re-enable or re-disable them]
    $color[d74894]
    $addButton[1;Reply Mention;1;replytoggle_$authorID;false]
    $addButton[1;Embed;1;setting_$authorID;false]
    $onlyPerms[manageguild;you need \`ManageServer\` Perm in order to manage me on how i should talk]
    `
    },
    {
        type: "interaction",
        $if: "old",
        prototype: "button",
        code: `
    $if[$getGuildVar[embed]==false]
    $interactionReply[From Now On!, i will use embeds as you toggled the option;;;;all;true]
    $setGuildVar[embed;true;$guildID]
    $else
    $if[$getGuildVar[embed]==true]
    $interactionReply[From Now On!, i will no longer use embeds as you toggled the option;;;;all;true]
    $setGuildVar[embed;false;$guildID]
    $endif
    $endif
    $onlyif[$get[authorID]==$interactionData[author.id];
    {newEmbed:{title:Error!}{description:You aren't the author of this interaction.}}
    {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==setting;]
    
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_] 
    `
    },{
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `$if[$getGuildVar[replyping]==true]
    $interactionReply[From Now On!, i will no longer mention you as you toggled the option;;;;all;true]
    $setGuildVar[replyping;false;$guildID]
    $else
    $if[$getGuildVar[replyping]==false]
    $interactionReply[From Now On!, i will mention you as you toggled the option;;;;all;true]
    $setGuildVar[replyping;true;$guildID]
    $endif
    $endif
    $onlyif[$get[authorID]==$interactionData[author.id];
    {newEmbed:{title:Error!}{description:You aren't the author of this interaction.}}
    {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
    ]

    $onlyif[$get[customId]==replytoggle;]
    
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_] `
    }]