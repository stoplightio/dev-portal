"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBase64 = void 0;
const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const result = reader.result;
        const base64String = result.replace(/data:.*\/.*;base64,/g, '');
        resolve(base64String);
    };
    reader.onerror = () => reject(reader.error);
});
exports.fileToBase64 = fileToBase64;
//# sourceMappingURL=fileToBase64.js.map