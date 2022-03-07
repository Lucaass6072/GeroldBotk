module.exports = ({
    name: "gemas",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code:`
$setGlobalUserVar[gemas;$sum[$getGlobalUserVar[gemas];$random[1;100]]]
$color[RANDOM]
$description[Você coletou suas gemas diarias $random[1;100] Gemas]
$globalCooldown[10s;{description: Você pode reivindicar seu próximo dinheiro diário em **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})