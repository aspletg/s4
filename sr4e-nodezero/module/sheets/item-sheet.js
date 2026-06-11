export class SR4EItemSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["sr4e", "sheet", "item"],
      template: "systems/sr4e-nodezero/templates/item/item-sheet.hbs",
      width: 560,
      height: 520
    });
  }
}
