export class SR4ECharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["sr4e", "sheet", "actor"],
      template: "systems/sr4e-nodezero/templates/actor/character-sheet.hbs",
      width: 720,
      height: 760,
      tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }
}
