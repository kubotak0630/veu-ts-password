import jsSHA from 'jssha';
import axios from 'axios';

function hash(text: string) {
  const shaObj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
  console.log('--- function hash -----');
  console.log(`sha=${shaObj}`);
  shaObj.update(text);
  const hash = shaObj.getHash('HEX');
  // console.log(hash);
  return hash;
}

// password.txtのファイルを開きに行き、ファイルが存在するかどうかで判定
function checkPasswordAsync(password: string) {
  return new Promise((resolve, reject) => {
    const url: string = hash(password);
    axios
      .get(`./${url}.txt`)
      .then(responce => {
        console.log('password OK!');
        resolve();
      })
      .catch(error => {
        console.log('password NG!');
        reject();
      });
  });
}

export default checkPasswordAsync;
