import {mm3e} from "./module/config.js"
import MM3eItemSheet from "./module/sheets/MM3eItemSheet.js";

Hooks.once("init", function() {
    console.log("M&M3e | Initializing Mutants & Masterminds 3e System | Shits about to get wild! Buckle up Buckaroo's!");

    CONFIG.mm3e = mm3e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mm3e", MM3eItemSheet, {makeDefault: true});
});
