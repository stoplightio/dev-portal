"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseOption = void 0;
const tslib_1 = require("tslib");
const dom_1 = require("@testing-library/dom");
const user_event_1 = tslib_1.__importDefault(require("@testing-library/user-event"));
function chooseOption(select, option) {
    user_event_1.default.click(select);
    user_event_1.default.selectOptions(dom_1.screen.getByRole('listbox'), dom_1.screen.getByRole('option', { name: option }));
}
exports.chooseOption = chooseOption;
//# sourceMappingURL=chooseOption.js.map