# SR4E Node Zero Foundry System File Structure

This scaffold is based on the Simple World-Building example system, adapted for SR4E architecture.

```text
sr4e-nodezero/
├── system.json
├── template.json
├── lang/
│   └── en.json
├── styles/
│   └── sr4e.css
├── templates/
│   ├── actor/
│   │   └── character-sheet.hbs
│   ├── item/
│   │   └── item-sheet.hbs
│   ├── apps/
│   └── parts/
│       ├── actor-main.hbs
│       ├── actor-skills.hbs
│       ├── actor-gear.hbs
│       ├── actor-matrix.hbs
│       ├── actor-astral.hbs
│       └── actor-rigging.hbs
├── module/
│   ├── sr4e.js
│   ├── config.js
│   ├── documents/
│   │   ├── sr4e-actor.js
│   │   └── sr4e-item.js
│   ├── sheets/
│   │   ├── character-sheet.js
│   │   └── item-sheet.js
│   ├── engine/
│   │   ├── dice-engine.js
│   │   ├── modifier-engine.js
│   │   ├── initiative-engine.js
│   │   ├── domain-engine.js
│   │   ├── link-engine.js
│   │   ├── control-state-engine.js
│   │   └── matrix-graph-engine.js
│   ├── importers/
│   │   └── chummer-importer.js
│   ├── apps/
│   │   ├── matrix-builder.js
│   │   ├── rigging-control-panel.js
│   │   └── character-builder.js
│   └── helpers/
│       └── templates.js
├── schemas/
├── packs/
├── assets/
│   ├── icons/
│   ├── matrix/
│   ├── astral/
│   ├── vehicles/
│   └── drones/
└── docs/
    └── file-structure.md
```
