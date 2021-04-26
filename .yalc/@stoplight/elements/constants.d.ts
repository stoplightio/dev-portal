import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Dictionary, HttpSecurityScheme, NodeType } from '@stoplight/types';
export declare const defaultPlatformUrl = "https://stoplight.io";
export declare const NodeTypeColors: Dictionary<string, NodeType>;
export declare const NodeTypePrettyName: Dictionary<string, NodeType>;
export declare const NodeTypeIconDefs: Dictionary<IconDefinition, NodeType>;
export declare const HttpSecuritySchemeColors: Partial<Record<HttpSecurityScheme['type'], string>>;
export declare const HttpMethodColors: {
    readonly get: "success";
    readonly post: "primary";
    readonly put: "warning";
    readonly patch: "warning";
    readonly delete: "danger";
};
export declare const HttpCodeColor: {
    readonly 0: "red";
    readonly 1: "gray";
    readonly 2: "green";
    readonly 3: "yellow";
    readonly 4: "orange";
    readonly 5: "red";
};
export declare const HttpCodeDescriptions: {
    100: string;
    101: string;
    200: string;
    201: string;
    202: string;
    203: string;
    204: string;
    205: string;
    206: string;
    422: string;
    226: string;
    300: string;
    301: string;
    302: string;
    303: string;
    304: string;
    305: string;
    306: string;
    307: string;
    308: string;
    400: string;
    401: string;
    402: string;
    403: string;
    404: string;
    405: string;
    406: string;
    407: string;
    408: string;
    409: string;
    410: string;
    411: string;
    412: string;
    413: string;
    414: string;
    415: string;
    416: string;
    417: string;
    418: string;
    420: string;
    426: string;
    428: string;
    429: string;
    431: string;
    444: string;
    449: string;
    450: string;
    451: string;
    499: string;
    500: string;
    501: string;
    502: string;
    503: string;
    504: string;
    505: string;
    506: string;
    507: string;
    508: string;
    509: string;
    510: string;
    511: string;
    598: string;
    599: string;
};
