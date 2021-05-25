"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistAtom = void 0;
const json_1 = require("@stoplight/json");
const jotai_1 = require("jotai");
const persistAtom = (key, atomInstance) => {
    if (typeof window === 'undefined' || window.localStorage === undefined) {
        return atomInstance;
    }
    return jotai_1.atom(get => {
        var _a;
        const localStorageValue = window.localStorage.getItem(key);
        const atomValue = get(atomInstance);
        if (localStorageValue === null)
            return atomValue;
        return (_a = json_1.safeParse(localStorageValue)) !== null && _a !== void 0 ? _a : atomValue;
    }, (_, set, update) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(update));
        }
        catch (error) {
            console.error(error);
        }
        set(atomInstance, update);
    });
};
exports.persistAtom = persistAtom;
//# sourceMappingURL=persistAtom.js.map