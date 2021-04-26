"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToArrayBuffer = exports.arrayBufferToBase64String = exports.arrayBufferUtf8ToString = void 0;
require("fast-text-encoding");
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
function arrayBufferUtf8ToString(buffer) {
    return textDecoder.decode(buffer);
}
exports.arrayBufferUtf8ToString = arrayBufferUtf8ToString;
function arrayBufferToBase64String(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
exports.arrayBufferToBase64String = arrayBufferToBase64String;
function stringToArrayBuffer(input) {
    return textEncoder.encode(input);
}
exports.stringToArrayBuffer = stringToArrayBuffer;
//# sourceMappingURL=arrayBuffer.js.map