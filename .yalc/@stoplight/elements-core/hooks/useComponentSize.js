"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponentSize = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
function getSize(el) {
    return el ? el.getBoundingClientRect() : new DOMRect();
}
function useComponentSize(container) {
    const [componentSize, setComponentSize] = React.useState(getSize(null));
    React.useEffect(() => {
        if (!container) {
            return;
        }
        const updateComponentSize = lodash_1.throttle(() => container && setComponentSize(getSize(container)), 1000, {
            trailing: true,
        });
        updateComponentSize();
        window.addEventListener('resize', updateComponentSize);
        return () => {
            updateComponentSize.cancel();
            window.removeEventListener('resize', updateComponentSize);
        };
    }, [container]);
    return componentSize;
}
exports.useComponentSize = useComponentSize;
//# sourceMappingURL=useComponentSize.js.map