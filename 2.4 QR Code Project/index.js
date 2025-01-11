/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { createWriteStream, writeFile } from 'node:fs';
import { input } from '@inquirer/prompts';
import qr from 'qr-image';

const answer = await input({ message: 'Enter a URL' });
console.log(answer);

let qr_png = qr.image(answer);
qr_png.pipe(createWriteStream('answer_QR.png'));

writeFile('message.txt', answer, (err) => {
  if (err) throw err;
  console.log('Text file was created!');
});
