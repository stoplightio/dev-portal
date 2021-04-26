"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocationHash = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
function useLocationHash() {
    const isBrowser = typeof window !== undefined;
    const [locationHash, setLocationHash] = React.useState(isBrowser && window.location.hash);
    React.useEffect(() => {
        if (!isBrowser)
            return;
        const hashChange = () => setLocationHash(window.location.hash);
        window.addEventListener('hashchange', hashChange, false);
        return () => window.removeEventListener('hashchange', hashChange);
    }, [isBrowser]);
    return locationHash;
}
exports.useLocationHash = useLocationHash;
//# sourceMappingURL=useLocationHash.js.map