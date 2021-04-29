"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const components_1 = require("./components");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faChevronDown, free_solid_svg_icons_1.faChevronRight, free_solid_svg_icons_1.faCube);
window.customElements.define('elements-api', components_1.ApiElement);
fontawesome_svg_core_1.dom.watch();
//# sourceMappingURL=index.js.map