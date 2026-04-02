"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLicenseKey = generateLicenseKey;
const crypto_1 = require("crypto");
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function generateLicenseKey() {
    const blocks = [];
    for (let b = 0; b < 4; b++) {
        let block = '';
        for (let c = 0; c < 4; c++) {
            block += ALPHABET[(0, crypto_1.randomInt)(ALPHABET.length)];
        }
        blocks.push(block);
    }
    return blocks.join('-');
}
//# sourceMappingURL=license-key.util.js.map