export async function preloadTemplates() {
  const templatePaths = [
    "systems/sr4e-nodezero/templates/parts/actor-main.hbs",
    "systems/sr4e-nodezero/templates/parts/actor-skills.hbs",
    "systems/sr4e-nodezero/templates/parts/actor-gear.hbs",
    "systems/sr4e-nodezero/templates/parts/actor-matrix.hbs",
    "systems/sr4e-nodezero/templates/parts/actor-astral.hbs",
    "systems/sr4e-nodezero/templates/parts/actor-rigging.hbs"
  ];
  return loadTemplates(templatePaths);
}
