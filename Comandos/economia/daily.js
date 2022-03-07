module.exports = ({
    name: "daily",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code:`
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[200;1500]]]
$color[RANDOM]
$description[Você reivindicou seu diário e obteve $random[200;1500] Reais]
$globalCooldown[24h;{description: Você pode reivindicar seu próximo dinheiro diário em **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})