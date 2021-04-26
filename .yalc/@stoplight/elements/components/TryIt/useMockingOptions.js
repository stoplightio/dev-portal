"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMockingOptions = void 0;
const jotai_1 = require("jotai");
const persistedMockingOptionsAtom = jotai_1.atom({ isEnabled: false });
const useMockingOptions = () => jotai_1.useAtom(persistedMockingOptionsAtom);
exports.useMockingOptions = useMockingOptions;
//# sourceMappingURL=useMockingOptions.js.map