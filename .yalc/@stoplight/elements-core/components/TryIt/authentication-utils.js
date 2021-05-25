"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistedSecuritySchemeWithValues = exports.filterOutAuthorizationParams = exports.isBearerSecurityScheme = exports.isBasicSecurityScheme = exports.isOAuth2SecurityScheme = exports.isApiKeySecurityScheme = void 0;
const tslib_1 = require("tslib");
const jotai_1 = require("jotai");
const lodash_1 = require("lodash");
const react_1 = tslib_1.__importDefault(require("react"));
const persistAtom_1 = require("../../utils/jotai/persistAtom");
const string_1 = require("../../utils/string");
const isApiKeySecurityScheme = (maybeIApiKey) => lodash_1.isObject(maybeIApiKey) && maybeIApiKey.type === 'apiKey';
exports.isApiKeySecurityScheme = isApiKeySecurityScheme;
const isOAuth2SecurityScheme = (maybeIOAuth2) => lodash_1.isObject(maybeIOAuth2) && maybeIOAuth2.type === 'oauth2';
exports.isOAuth2SecurityScheme = isOAuth2SecurityScheme;
const isBasicSecurityScheme = (maybeIBasic) => lodash_1.isObject(maybeIBasic) && maybeIBasic.type === 'http' && maybeIBasic.scheme === 'basic';
exports.isBasicSecurityScheme = isBasicSecurityScheme;
const isBearerSecurityScheme = (maybeIBearer) => lodash_1.isObject(maybeIBearer) && maybeIBearer.type === 'http' && maybeIBearer.scheme === 'bearer';
exports.isBearerSecurityScheme = isBearerSecurityScheme;
function filterOutAuthorizationParams(queryParams, securitySchemes = []) {
    const flattenedSecuritySchemes = lodash_1.flatten(securitySchemes);
    const securitySchemeNames = getSecuritySchemeNames(flattenedSecuritySchemes);
    return queryParams.filter(queryParam => !securitySchemeNames.some(string_1.caseInsensitivelyEquals(queryParam.name)));
}
exports.filterOutAuthorizationParams = filterOutAuthorizationParams;
const getSecuritySchemeNames = (securitySchemes) => securitySchemes.flatMap(scheme => {
    if (exports.isApiKeySecurityScheme(scheme)) {
        return scheme.name;
    }
    if (exports.isOAuth2SecurityScheme(scheme)) {
        return 'Authorization';
    }
    return [];
});
const securitySchemeValuesAtom = persistAtom_1.persistAtom('TryIt_securitySchemeValues', jotai_1.atom({}));
const usePersistedSecuritySchemeWithValues = () => {
    const [currentScheme, setCurrentScheme] = react_1.default.useState();
    const [securitySchemeValues, setSecuritySchemeValues] = jotai_1.useAtom(securitySchemeValuesAtom);
    const setPersistedAuthenticationSettings = (securitySchemeWithValues) => {
        setCurrentScheme(securitySchemeWithValues);
        if (securitySchemeWithValues) {
            const key = securitySchemeWithValues.scheme.key;
            const value = securitySchemeWithValues.authValue;
            if (value !== undefined) {
                setSecuritySchemeValues(Object.assign(Object.assign({}, securitySchemeValues), { [key]: value }));
            }
        }
    };
    const persistedSecuritySchemeValue = currentScheme && securitySchemeValues[currentScheme.scheme.key];
    const schemeWithPersistedValue = react_1.default.useMemo(() => {
        if (!currentScheme)
            return undefined;
        if (currentScheme.authValue)
            return currentScheme;
        return Object.assign(Object.assign({}, currentScheme), { authValue: persistedSecuritySchemeValue });
    }, [currentScheme, persistedSecuritySchemeValue]);
    return [schemeWithPersistedValue, setPersistedAuthenticationSettings];
};
exports.usePersistedSecuritySchemeWithValues = usePersistedSecuritySchemeWithValues;
//# sourceMappingURL=authentication-utils.js.map