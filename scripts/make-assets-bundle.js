import * as SCParser from "./../../../tools/tool-parser/index.js";
const SC2 = 'C:/Program Files (x86)/StarCraft II'
SCParser.config.binaryFolder = `${SC2}/TOOLS/tool-parser/binary`
SCParser.SCGame.directories.assets = `${SC2}/ASSETS/all-races-factions-assets`
SCParser.SCGame.directories.mods = `${SC2}/mods/all-races-pvp-2`

let mod = await SCParser.createMod({
    mods: [
        '$assets/BroodWar-Assets.SC2Mod',
        '$assets/Dragons-Assets.SC2Mod',
        '$assets/Scion-Assets.SC2Mod',
        '$assets/Synoid-Assets.SC2Mod',
        '$assets/TalDarim-Assets.SC2Mod',
        '$assets/UED-Assets.SC2Mod',
        '$assets/Umojan-Assets.SC2Mod',
        '$assets/UPL-Assets.SC2Mod',
        '$assets/ZCR-Assets.SC2Mod'
    ]
})

mod.dependencies = []

mod.setDocInfo({
    Name:`[AR3] AllRaces-Assets`,
    DescLong: `Custom Factions Assets Bundle`,
    DescShort: ``
})

mod.write('./../../../ASSETS/all-races-factions-assets-bundle/AllRaces-Assets.SC2Mod')