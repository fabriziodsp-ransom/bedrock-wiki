if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.04fe75ca.js",revision:null},{url:"assets/404.md.04fe75ca.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.b070cc1a.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.b070cc1a.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.08031d20.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.08031d20.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.cb3d425f.js",revision:null},{url:"assets/animation-controllers_death-commands.md.cb3d425f.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.35e105c9.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.35e105c9.lean.js",revision:null},{url:"assets/animation-controllers_index.md.d312fc77.js",revision:null},{url:"assets/animation-controllers_index.md.d312fc77.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.33564020.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.33564020.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.43306ddf.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.43306ddf.lean.js",revision:null},{url:"assets/app.41172d1b.js",revision:null},{url:"assets/blocks_applying-effects.md.9c8feffc.js",revision:null},{url:"assets/blocks_applying-effects.md.9c8feffc.lean.js",revision:null},{url:"assets/blocks_block-materials.md.77cffd2a.js",revision:null},{url:"assets/blocks_block-materials.md.77cffd2a.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.0e57e95a.js",revision:null},{url:"assets/blocks_block-shapes.md.0e57e95a.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.b0336e88.js",revision:null},{url:"assets/blocks_block-sounds.md.b0336e88.lean.js",revision:null},{url:"assets/blocks_block-tags.md.5309c8f3.js",revision:null},{url:"assets/blocks_block-tags.md.5309c8f3.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.17521a86.js",revision:null},{url:"assets/blocks_block-texture-variation.md.17521a86.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.63ca1206.js",revision:null},{url:"assets/blocks_blocks-16.md.63ca1206.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.cd9467ab.js",revision:null},{url:"assets/blocks_blocks-intro.md.cd9467ab.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.be2222a8.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.be2222a8.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.142c51e7.js",revision:null},{url:"assets/blocks_custom-tree.md.142c51e7.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.941fc029.js",revision:null},{url:"assets/blocks_fake-blocks.md.941fc029.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.eb5a5450.js",revision:null},{url:"assets/blocks_flipbook-textures.md.eb5a5450.lean.js",revision:null},{url:"assets/blocks_index.md.2d03b54c.js",revision:null},{url:"assets/blocks_index.md.2d03b54c.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.f86d27b9.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.f86d27b9.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.ce4df3c3.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.ce4df3c3.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.b974145a.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.b974145a.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.54dccdf7.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.54dccdf7.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.f053ba74.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.375b25e9.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_index.md.ea2a8087.js",revision:null},{url:"assets/commands_index.md.ea2a8087.lean.js",revision:null},{url:"assets/commands_mcfunction.md.f1bccc14.js",revision:null},{url:"assets/commands_mcfunction.md.f1bccc14.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.c9c47def.js",revision:null},{url:"assets/commands_nbt-commands.md.c9c47def.lean.js",revision:null},{url:"assets/commands_new-execute.md.c5b59077.js",revision:null},{url:"assets/commands_new-execute.md.c5b59077.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.c618e154.js",revision:null},{url:"assets/commands_relative-coordinates.md.c618e154.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.dec34d1c.js",revision:null},{url:"assets/commands_scoreboard-operations.md.dec34d1c.lean.js",revision:null},{url:"assets/commands_selectors.md.565432d2.js",revision:null},{url:"assets/commands_selectors.md.565432d2.lean.js",revision:null},{url:"assets/commands_tellraw.md.714670d7.js",revision:null},{url:"assets/commands_tellraw.md.714670d7.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.f5df52b7.js",revision:null},{url:"assets/commands_tick_json-creations.md.f5df52b7.lean.js",revision:null},{url:"assets/commands_timers.md.ac9c4e22.js",revision:null},{url:"assets/commands_timers.md.ac9c4e22.lean.js",revision:null},{url:"assets/concepts_contents.md.01000341.js",revision:null},{url:"assets/concepts_contents.md.01000341.lean.js",revision:null},{url:"assets/concepts_emojis.md.275edc67.js",revision:null},{url:"assets/concepts_emojis.md.275edc67.lean.js",revision:null},{url:"assets/concepts_index.md.9f93f965.js",revision:null},{url:"assets/concepts_index.md.9f93f965.lean.js",revision:null},{url:"assets/concepts_molang.md.4750bb44.js",revision:null},{url:"assets/concepts_molang.md.4750bb44.lean.js",revision:null},{url:"assets/concepts_namespaces.md.680e2616.js",revision:null},{url:"assets/concepts_namespaces.md.680e2616.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.1e583a23.js",revision:null},{url:"assets/concepts_overwriting-assets.md.1e583a23.lean.js",revision:null},{url:"assets/concepts_shaders.md.919b392b.js",revision:null},{url:"assets/concepts_shaders.md.919b392b.lean.js",revision:null},{url:"assets/concepts_sounds.md.4f15019e.js",revision:null},{url:"assets/concepts_sounds.md.4f15019e.lean.js",revision:null},{url:"assets/concepts_subpacks.md.93978e8a.js",revision:null},{url:"assets/concepts_subpacks.md.93978e8a.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.4e1d45d5.js",revision:null},{url:"assets/concepts_text-and-translations.md.4e1d45d5.lean.js",revision:null},{url:"assets/concepts_textures-list.md.07d4cee4.js",revision:null},{url:"assets/concepts_textures-list.md.07d4cee4.lean.js",revision:null},{url:"assets/contribute-how-to.md.d767eb2e.js",revision:null},{url:"assets/contribute-how-to.md.d767eb2e.lean.js",revision:null},{url:"assets/contribute-style.md.a9e28b45.js",revision:null},{url:"assets/contribute-style.md.a9e28b45.lean.js",revision:null},{url:"assets/contribute.md.a10de7f1.js",revision:null},{url:"assets/contribute.md.a10de7f1.lean.js",revision:null},{url:"assets/discord.md.02ee59a4.js",revision:null},{url:"assets/discord.md.02ee59a4.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.44f76aae.js",revision:null},{url:"assets/documentation_creative-categories.md.44f76aae.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.cebc3020.js",revision:null},{url:"assets/documentation_fog-ids.md.cebc3020.lean.js",revision:null},{url:"assets/documentation_index.md.d346fdf6.js",revision:null},{url:"assets/documentation_index.md.d346fdf6.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.750505ab.js",revision:null},{url:"assets/documentation_material-config-description.md.750505ab.lean.js",revision:null},{url:"assets/documentation_materials.md.4af012a5.js",revision:null},{url:"assets/documentation_materials.md.4af012a5.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.dc5065f2.js",revision:null},{url:"assets/documentation_pack-structure.md.dc5065f2.lean.js",revision:null},{url:"assets/documentation_projectiles.md.557b310c.js",revision:null},{url:"assets/documentation_projectiles.md.557b310c.lean.js",revision:null},{url:"assets/documentation_queries.md.a74a13c7.js",revision:null},{url:"assets/documentation_queries.md.a74a13c7.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.861e0208.js",revision:null},{url:"assets/documentation_shared-constructs.md.861e0208.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.9ae27638.js",revision:null},{url:"assets/documentation_sound-definitions.md.9ae27638.lean.js",revision:null},{url:"assets/entities_boat-entities.md.4ee73cd6.js",revision:null},{url:"assets/entities_boat-entities.md.4ee73cd6.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.8e84e21a.js",revision:null},{url:"assets/entities_detecting-other-entities.md.8e84e21a.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f247ac81.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f247ac81.lean.js",revision:null},{url:"assets/entities_dummy-components.md.3603cf6c.js",revision:null},{url:"assets/entities_dummy-components.md.3603cf6c.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.8a1f554b.js",revision:null},{url:"assets/entities_dummy-entities.md.8a1f554b.lean.js",revision:null},{url:"assets/entities_entity-attack.md.7d82c5b4.js",revision:null},{url:"assets/entities_entity-attack.md.7d82c5b4.lean.js",revision:null},{url:"assets/entities_entity-events.md.92f67a75.js",revision:null},{url:"assets/entities_entity-events.md.92f67a75.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.34311628.js",revision:null},{url:"assets/entities_entity-holds-item.md.34311628.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.7bca3a57.js",revision:null},{url:"assets/entities_entity-intro-bp.md.7bca3a57.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.370679e2.js",revision:null},{url:"assets/entities_entity-intro-rp.md.370679e2.lean.js",revision:null},{url:"assets/entities_entity-movement.md.5a53cb5a.js",revision:null},{url:"assets/entities_entity-movement.md.5a53cb5a.lean.js",revision:null},{url:"assets/entities_entity-properties.md.ce16577c.js",revision:null},{url:"assets/entities_entity-properties.md.ce16577c.lean.js",revision:null},{url:"assets/entities_flying-entities.md.1a33d7d3.js",revision:null},{url:"assets/entities_flying-entities.md.1a33d7d3.lean.js",revision:null},{url:"assets/entities_index.md.5be661d5.js",revision:null},{url:"assets/entities_index.md.5be661d5.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.f2b0b444.js",revision:null},{url:"assets/entities_introduction-to-aec.md.f2b0b444.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1750b069.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1750b069.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.2c3d183c.js",revision:null},{url:"assets/entities_look-at-entity.md.2c3d183c.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.ddb770e5.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.ddb770e5.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.01475e73.js",revision:null},{url:"assets/entities_npc-dialogs.md.01475e73.lean.js",revision:null},{url:"assets/entities_render-controllers.md.64acb601.js",revision:null},{url:"assets/entities_render-controllers.md.64acb601.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.a9340f41.js",revision:null},{url:"assets/entities_runtime-identifier.md.a9340f41.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.51cc371b.js",revision:null},{url:"assets/entities_sleeping-entities.md.51cc371b.lean.js",revision:null},{url:"assets/entities_solid-entities.md.6dec300b.js",revision:null},{url:"assets/entities_solid-entities.md.6dec300b.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.f61fed33.js",revision:null},{url:"assets/entities_spawn-rules.md.f61fed33.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.50c90268.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.50c90268.lean.js",revision:null},{url:"assets/entities_timers.md.b0e36ea6.js",revision:null},{url:"assets/entities_timers.md.b0e36ea6.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.60aa256a.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.60aa256a.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.f6c424cf.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.f6c424cf.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.cc43952f.js",revision:null},{url:"assets/entities_village-mechanic.md.cc43952f.lean.js",revision:null},{url:"assets/entities_vuc-full.md.f70fbcdf.lean.js",revision:null},{url:"assets/entities_vusr-full.md.48e68b18.js",revision:null},{url:"assets/entities_vusr-full.md.48e68b18.lean.js",revision:null},{url:"assets/graph-test.md.0259f043.js",revision:null},{url:"assets/graph-test.md.0259f043.lean.js",revision:null},{url:"assets/guide_addons.md.7cf3291e.js",revision:null},{url:"assets/guide_addons.md.7cf3291e.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.bf66520e.js",revision:null},{url:"assets/guide_advancedmanifest.md.bf66520e.lean.js",revision:null},{url:"assets/guide_blockbench.md.5cea5679.js",revision:null},{url:"assets/guide_blockbench.md.5cea5679.lean.js",revision:null},{url:"assets/guide_custom-entity.md.9221aa71.js",revision:null},{url:"assets/guide_custom-entity.md.9221aa71.lean.js",revision:null},{url:"assets/guide_custom-item.md.79ec6e43.js",revision:null},{url:"assets/guide_custom-item.md.79ec6e43.lean.js",revision:null},{url:"assets/guide_download-packs.md.455dec09.js",revision:null},{url:"assets/guide_download-packs.md.455dec09.lean.js",revision:null},{url:"assets/guide_format-version.md.a2dd9fe1.js",revision:null},{url:"assets/guide_format-version.md.a2dd9fe1.lean.js",revision:null},{url:"assets/guide_index.md.3b4e9eb1.js",revision:null},{url:"assets/guide_index.md.3b4e9eb1.lean.js",revision:null},{url:"assets/guide_introduction.md.6500d22c.js",revision:null},{url:"assets/guide_introduction.md.6500d22c.lean.js",revision:null},{url:"assets/guide_loot-table.md.cc01666f.js",revision:null},{url:"assets/guide_loot-table.md.cc01666f.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.c0e3f963.js",revision:null},{url:"assets/guide_project-setup-android.md.c0e3f963.lean.js",revision:null},{url:"assets/guide_project-setup.md.943b3545.js",revision:null},{url:"assets/guide_project-setup.md.943b3545.lean.js",revision:null},{url:"assets/guide_software-preparation.md.b9a57b04.js",revision:null},{url:"assets/guide_software-preparation.md.b9a57b04.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.b15540c3.js",revision:null},{url:"assets/guide_troubleshooting.md.b15540c3.lean.js",revision:null},{url:"assets/guide_understanding-json.md.e6e957dd.js",revision:null},{url:"assets/guide_understanding-json.md.e6e957dd.lean.js",revision:null},{url:"assets/hacktoberfest.md.1497d854.js",revision:null},{url:"assets/hacktoberfest.md.1497d854.lean.js",revision:null},{url:"assets/index.md.2ff55131.js",revision:null},{url:"assets/index.md.2ff55131.lean.js",revision:null},{url:"assets/items_attachables.md.9449d893.js",revision:null},{url:"assets/items_attachables.md.9449d893.lean.js",revision:null},{url:"assets/items_custom-armor.md.f5c3421a.js",revision:null},{url:"assets/items_custom-armor.md.f5c3421a.lean.js",revision:null},{url:"assets/items_custom-weapon.md.94be5aca.js",revision:null},{url:"assets/items_custom-weapon.md.94be5aca.lean.js",revision:null},{url:"assets/items_enchantments.md.ec995d04.js",revision:null},{url:"assets/items_enchantments.md.ec995d04.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.36b51621.js",revision:null},{url:"assets/items_equipped-item-commands.md.36b51621.lean.js",revision:null},{url:"assets/items_index.md.22a47a48.js",revision:null},{url:"assets/items_index.md.22a47a48.lean.js",revision:null},{url:"assets/items_item-identifiers.md.ac0353b4.js",revision:null},{url:"assets/items_item-identifiers.md.ac0353b4.lean.js",revision:null},{url:"assets/items_items-16.md.2a712bad.js",revision:null},{url:"assets/items_items-16.md.2a712bad.lean.js",revision:null},{url:"assets/items_items-intro.md.a69c3c25.js",revision:null},{url:"assets/items_items-intro.md.a69c3c25.lean.js",revision:null},{url:"assets/items_spawning-items.md.acc87ca5.js",revision:null},{url:"assets/items_spawning-items.md.acc87ca5.lean.js",revision:null},{url:"assets/items_throwable.md.6dc035ae.js",revision:null},{url:"assets/items_throwable.md.6dc035ae.lean.js",revision:null},{url:"assets/items_tool-durability.md.6a404331.js",revision:null},{url:"assets/items_tool-durability.md.6a404331.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.1c05740b.js",revision:null},{url:"assets/items_troubleshooting-items.md.1c05740b.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.52d77040.js",revision:null},{url:"assets/items_vanilla-usage-items.md.52d77040.lean.js",revision:null},{url:"assets/items_vui-full.md.ef644ab5.js",revision:null},{url:"assets/items_vui-full.md.ef644ab5.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.995747b9.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.995747b9.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.8e5b8ebb.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.8e5b8ebb.lean.js",revision:null},{url:"assets/json-ui_index.md.dc603e0f.js",revision:null},{url:"assets/json-ui_index.md.dc603e0f.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.25f16c1d.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.25f16c1d.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.e52fad52.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.e52fad52.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.e238f51e.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.e238f51e.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.9eae1d9f.js",revision:null},{url:"assets/json-ui_string-to-number.md.9eae1d9f.lean.js",revision:null},{url:"assets/loot_index.md.3365da95.js",revision:null},{url:"assets/loot_index.md.3365da95.lean.js",revision:null},{url:"assets/loot_item-functions.md.56f7461e.js",revision:null},{url:"assets/loot_item-functions.md.56f7461e.lean.js",revision:null},{url:"assets/loot_loot-tables.md.b7e6d8ea.js",revision:null},{url:"assets/loot_loot-tables.md.b7e6d8ea.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.40d8e352.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.40d8e352.lean.js",revision:null},{url:"assets/loot_recipes.md.f4e3657d.js",revision:null},{url:"assets/loot_recipes.md.f4e3657d.lean.js",revision:null},{url:"assets/loot_trade-tables.md.2287ab24.js",revision:null},{url:"assets/loot_trade-tables.md.2287ab24.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.69e24a72.js",revision:null},{url:"assets/loot_trading-behavior.md.69e24a72.lean.js",revision:null},{url:"assets/meta_addon-performance.md.553fe87a.js",revision:null},{url:"assets/meta_addon-performance.md.553fe87a.lean.js",revision:null},{url:"assets/meta_index.md.16270c05.js",revision:null},{url:"assets/meta_index.md.16270c05.lean.js",revision:null},{url:"assets/meta_jq.md.05f11fd9.js",revision:null},{url:"assets/meta_jq.md.05f11fd9.lean.js",revision:null},{url:"assets/meta_style-guide.md.a1cad4d0.js",revision:null},{url:"assets/meta_style-guide.md.a1cad4d0.lean.js",revision:null},{url:"assets/meta_useful-links.md.f5402cb5.js",revision:null},{url:"assets/meta_useful-links.md.f5402cb5.lean.js",revision:null},{url:"assets/meta_using-schemas.md.8d572b04.js",revision:null},{url:"assets/meta_using-schemas.md.8d572b04.lean.js",revision:null},{url:"assets/meta_version-control.md.8af418c4.js",revision:null},{url:"assets/meta_version-control.md.8af418c4.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.07eb1d56.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.07eb1d56.lean.js",revision:null},{url:"assets/nbt_index.md.1a11ed0c.js",revision:null},{url:"assets/nbt_index.md.1a11ed0c.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.9afea5e8.js",revision:null},{url:"assets/nbt_mcstructure.md.9afea5e8.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.89a6a71c.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.89a6a71c.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.47037429.js",revision:null},{url:"assets/nbt_step-by-step-example.md.47037429.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.058d61f9.js",revision:null},{url:"assets/nbt_structure-limits.md.058d61f9.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.b42e8f3f.js",revision:null},{url:"assets/particles_disabling-particles.md.b42e8f3f.lean.js",revision:null},{url:"assets/particles_index.md.5f4889cf.js",revision:null},{url:"assets/particles_index.md.5f4889cf.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.aebe7520.js",revision:null},{url:"assets/particles_particles-and-sounds.md.aebe7520.lean.js",revision:null},{url:"assets/particles_particles.md.8c422e17.js",revision:null},{url:"assets/particles_particles.md.8c422e17.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.7b99cd2c.js",revision:null},{url:"assets/particles_vanilla-particles.md.7b99cd2c.lean.js",revision:null},{url:"assets/privacy.md.8f336f60.js",revision:null},{url:"assets/privacy.md.8f336f60.lean.js",revision:null},{url:"assets/scripting_custom-command.md.99a07de1.js",revision:null},{url:"assets/scripting_custom-command.md.99a07de1.lean.js",revision:null},{url:"assets/scripting_game-tests.md.10e8adcb.js",revision:null},{url:"assets/scripting_game-tests.md.10e8adcb.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.5c808015.js",revision:null},{url:"assets/scripting_gametest-form.md.5c808015.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.cf15cfd5.js",revision:null},{url:"assets/scripting_gametest-qna.md.cf15cfd5.lean.js",revision:null},{url:"assets/scripting_index.md.a00b41d3.js",revision:null},{url:"assets/scripting_index.md.a00b41d3.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.71a3cc7e.js",revision:null},{url:"assets/scripting_saving-loading.md.71a3cc7e.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.927aa857.js",revision:null},{url:"assets/scripting_scripting-intro.md.927aa857.lean.js",revision:null},{url:"assets/scripting_typescript.md.c886190f.js",revision:null},{url:"assets/scripting_typescript.md.c886190f.lean.js",revision:null},{url:"assets/servers_index.md.d4e3f920.js",revision:null},{url:"assets/servers_index.md.d4e3f920.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d4b57de3.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d4b57de3.lean.js",revision:null},{url:"assets/servers_server-software.md.8aaee7e8.js",revision:null},{url:"assets/servers_server-software.md.8aaee7e8.lean.js",revision:null},{url:"assets/style.1e62f284.css",revision:null},{url:"assets/test.md.6ea796e8.js",revision:null},{url:"assets/test.md.6ea796e8.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.10b99467.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.10b99467.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.6f0df08c.js",revision:null},{url:"assets/visuals_animation-effects.md.6f0df08c.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.75f9a088.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.75f9a088.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.362ec441.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.362ec441.lean.js",revision:null},{url:"assets/visuals_death-animations.md.6f439164.js",revision:null},{url:"assets/visuals_death-animations.md.6f439164.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.72558568.js",revision:null},{url:"assets/visuals_glowing-texture.md.72558568.lean.js",revision:null},{url:"assets/visuals_index.md.641f9f78.js",revision:null},{url:"assets/visuals_index.md.641f9f78.lean.js",revision:null},{url:"assets/visuals_introduction.md.7fd7fdd8.js",revision:null},{url:"assets/visuals_introduction.md.7fd7fdd8.lean.js",revision:null},{url:"assets/visuals_leash-position.md.aaa83d06.js",revision:null},{url:"assets/visuals_leash-position.md.aaa83d06.lean.js",revision:null},{url:"assets/visuals_materials.md.d2d3c405.js",revision:null},{url:"assets/visuals_materials.md.d2d3c405.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.b31bdf3a.js",revision:null},{url:"assets/visuals_math-based-animations.md.b31bdf3a.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.e2816f32.js",revision:null},{url:"assets/visuals_player-geometry.md.e2816f32.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.2120f9b6.js",revision:null},{url:"assets/visuals_remove-shadows.md.2120f9b6.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.b2dad520.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.b2dad520.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.2f89374b.js",revision:null},{url:"assets/visuals_structure-presentation.md.2f89374b.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.964d18e7.js",revision:null},{url:"assets/vr_editing-your-first-model.md.964d18e7.lean.js",revision:null},{url:"assets/vr_index.md.a0edd5ee.js",revision:null},{url:"assets/vr_index.md.a0edd5ee.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.59a7b7ad.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.59a7b7ad.lean.js",revision:null},{url:"assets/vr_pack_setup.md.7c558ac6.js",revision:null},{url:"assets/vr_pack_setup.md.7c558ac6.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.030ab251.js",revision:null},{url:"assets/world-generation_biome-tags.md.030ab251.lean.js",revision:null},{url:"assets/world-generation_biomes.md.78072316.js",revision:null},{url:"assets/world-generation_biomes.md.78072316.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.41b45a61.js",revision:null},{url:"assets/world-generation_custom-ores.md.41b45a61.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.a2df0795.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.a2df0795.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.d6449942.js",revision:null},{url:"assets/world-generation_feature-types.md.d6449942.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.0c223f0a.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.0c223f0a.lean.js",revision:null},{url:"assets/world-generation_index.md.9d2b2416.js",revision:null},{url:"assets/world-generation_index.md.9d2b2416.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.d2cb199a.js",revision:null},{url:"assets/world-generation_structure-features.md.d2cb199a.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.50e44f04.js",revision:null},{url:"assets/world-generation_surface-builder.md.50e44f04.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.ee327f5e.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.ee327f5e.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
