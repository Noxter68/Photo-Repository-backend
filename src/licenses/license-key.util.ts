import { randomInt } from 'crypto';

// Alphabet without ambiguous characters (no 0/O, 1/I/L)
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export function generateLicenseKey(): string {
  const blocks: string[] = [];
  for (let b = 0; b < 4; b++) {
    let block = '';
    for (let c = 0; c < 4; c++) {
      block += ALPHABET[randomInt(ALPHABET.length)];
    }
    blocks.push(block);
  }
  return blocks.join('-');
}
