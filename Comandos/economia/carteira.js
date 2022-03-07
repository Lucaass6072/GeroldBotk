module.exports = ({
    name: "saldo",
    aliases: ['bal', 'money', 'cash'],
    description: "See your or a user's balance",
    usage: "balance (user)",
    category: "economy",
    code: `$color[RANDOM]
    $title[$username[$findMember[$message]] Saldo]
    $description[<@$findMember[$message]> atualmente tem $getGlobalUserVar[money;$findMember[$message]] Reais]
    
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})