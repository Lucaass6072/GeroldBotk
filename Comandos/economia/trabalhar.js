module.exports = ({
    name: "work",
    desription: "Work to earn more money!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[Voce trabalhou e conseguiu $random[50;2100] Reais]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;2000]]]
    $globalCooldown[1m;{description: Você pode trabalhar novamente em **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
