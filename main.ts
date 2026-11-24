import { writeFileSync } from 'node:fs';
const word = 'bahan-nuyul';
if (!/^bahan-nuyul$/.test(word)) {
  throw new Error('invalid word');
}
writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, word);
