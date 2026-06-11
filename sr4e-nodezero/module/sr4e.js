import { SR4EActor } from "./documents/sr4e-actor.js";
import { SR4EItem } from "./documents/sr4e-item.js";
import { SR4ECharacterSheet } from "./sheets/character-sheet.js";
import { SR4EItemSheet } from "./sheets/item-sheet.js";
import { preloadTemplates } from "./helpers/templates.js";

Hooks.once("init", async () => {
  console.log("SR4E Node Zero | Initializing system");

  CONFIG.Actor.documentClass = SR4EActor;
  CONFIG.Item.documentClass = SR4EItem;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("sr4e-nodezero", SR4ECharacterSheet, { makeDefault: true });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("sr4e-nodezero", SR4EItemSheet, { makeDefault: true });

  CONFIG.Combat.initiative = {
    formula: "@initiative.physical.base + 1d6",
    decimals: 0
  };

  await preloadTemplates();
});
