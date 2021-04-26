"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamplesFromSchema = void 0;
const lodash_1 = require("lodash");
function getExamplesFromSchema(data) {
    return lodash_1.isObject(data)
        ? Object.assign(Object.assign(Object.assign({}, (lodash_1.isObject(data['x-examples']) && Object.assign({}, data['x-examples']))), (lodash_1.isObject(data['examples']) && Object.assign({}, data['examples']))), ('x-example' in data && { default: data['x-example'] })) : void 0;
}
exports.getExamplesFromSchema = getExamplesFromSchema;
//# sourceMappingURL=utils.js.map