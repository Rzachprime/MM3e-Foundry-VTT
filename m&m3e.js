import MM3eCharacterSheet from "./module/sheets/MM3eCharacterSheet.js";

Hooks.once("init", function(){
    console.log("M&M3e | Initializing Mutants & Masterminds 3e System");

    Items.registerSheet("m&m3e", MM3eCharacterSheet, {makeDefault: true});
})