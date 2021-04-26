"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementClass = void 0;
const tslib_1 = require("tslib");
const json_1 = require("@stoplight/json");
const lodash_1 = require("lodash");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const createElementClass = (Component, propDescriptors) => {
    return class extends HTMLElement {
        constructor() {
            super();
            this._props = {};
            Object.defineProperties(this, lodash_1.mapValues(propDescriptors, (_, key) => ({
                get: () => {
                    return this._props[key];
                },
                set: (newValue) => {
                    if (this._props[key] === newValue) {
                        return;
                    }
                    this._props[key] = newValue;
                    this._renderComponent();
                    this._safeWriteAttribute(key, newValue);
                },
                enumerable: true,
            })));
        }
        static get observedAttributes() {
            return Object.keys(propDescriptors);
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (propDescriptors[name]) {
                const newPropValue = this._safeReadAttribute(name);
                if (!lodash_1.isEqual(this._props[name], newPropValue)) {
                    this._props[name] = newPropValue;
                    this._renderComponent();
                }
            }
        }
        connectedCallback() {
            this._mountPoint = document.createElement('div');
            this.appendChild(this._mountPoint);
            for (const key in propDescriptors) {
                if (propDescriptors.hasOwnProperty(key)) {
                    this._props[key] = this._safeReadAttribute(key);
                }
            }
            this._renderComponent();
        }
        disconnectedCallback() {
            if (this._mountPoint) {
                ReactDOM.unmountComponentAtNode(this._mountPoint);
                this.removeChild(this._mountPoint);
                this._mountPoint = undefined;
            }
        }
        _safeReadAttribute(attrName) {
            if (!this.hasAttribute(attrName) || !propDescriptors[attrName]) {
                return undefined;
            }
            const attrValue = this.getAttribute(attrName);
            const type = propDescriptors[attrName].type;
            if (type === 'string') {
                return (attrValue !== null && attrValue !== void 0 ? attrValue : undefined);
            }
            if (type === 'number') {
                return (attrValue ? Number(attrValue) : undefined);
            }
            if (type === 'boolean') {
                return (attrValue ? Boolean(attrValue) : undefined);
            }
            if (type === 'object') {
                return json_1.safeParse(attrValue !== null && attrValue !== void 0 ? attrValue : '');
            }
            return undefined;
        }
        _safeWriteAttribute(attrName, newValue) {
            if (!propDescriptors[attrName]) {
                return;
            }
            if (!newValue) {
                this.removeAttribute(attrName);
                return;
            }
            const type = propDescriptors[attrName].type;
            this.setAttribute(attrName, stringifyValue(newValue));
            function stringifyValue(val) {
                if (type === 'string' || type === 'number' || type === 'boolean') {
                    return String(val);
                }
                if (type === 'object') {
                    return json_1.safeStringify(val) || '';
                }
                return '';
            }
        }
        _renderComponent() {
            if (this._mountPoint) {
                const props = lodash_1.mapValues(propDescriptors, (descriptor, key) => { var _a; return (_a = this._props[key]) !== null && _a !== void 0 ? _a : descriptor.defaultValue; });
                ReactDOM.render(React.createElement(Component, props), this._mountPoint);
            }
        }
    };
};
exports.createElementClass = createElementClass;
//# sourceMappingURL=createElementClass.js.map