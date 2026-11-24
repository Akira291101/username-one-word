import { writeFileSync } from 'node:fs';
const username = 'bahan-nuyul';
if (!/^bahan-nuyul$/.test(username)) {
  throw new Error('invalid word');
}
writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, username);
