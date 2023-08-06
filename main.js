// @ts-check

const source = "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";

/**
 * @param {ArrayBuffer} data
 * @returns {ArrayBuffer}
 */
const sha256 = data => {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  const rightRotate = (a, b) => {
    return (a >>> b) | (a << (32 - b));
  };

  const message = new DataView(new ArrayBuffer(((data.byteLength + 72) >>> 6) * 64));
  const u8arr = new Uint8Array(data);
  for (let i = 0; i < u8arr.length; i += 1) {
    message.setUint8(i, u8arr[i]);
  }

  let h0 = 0x6a09e667;
  let h1 = 0xbb67ae85;
  let h2 = 0x3c6ef372;
  let h3 = 0xa54ff53a;
  let h4 = 0x510e527f;
  let h5 = 0x9b05688c;
  let h6 = 0x1f83d9ab;
  let h7 = 0x5be0cd19;

  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  message.setUint8(data.byteLength, 128);
  message.setUint32(message.byteLength - 4, data.byteLength * 8);

  for (let i = 0; i < message.byteLength; i += 64) {
    const w = new Int32Array(64);

    for (let j = 0; j < 16; j += 1) {
      w[j] = message.getInt32(i + j * 4);
    }

    for (let i = 16; i < 64; i += 1) {
      const s0 = rightRotate(w[i - 15],  7) ^ rightRotate(w[i - 15], 18) ^ (w[i - 15] >>>  3);
      const s1 = rightRotate(w[i -  2], 17) ^ rightRotate(w[i -  2], 19) ^ (w[i -  2] >>> 10);
      w[i] = w[i - 16] + s0 + w[i - 7] + s1;
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;

    for (let i = 0; i < 64; i += 1) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ ((~e) & g);
      const temp1 = (h + S1 + ch + k[i] + w[i]) | 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;

    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }

  const retVal = new DataView(new ArrayBuffer(32));
  retVal.setInt32( 0, h0);
  retVal.setInt32( 4, h1);
  retVal.setInt32( 8, h2);
  retVal.setInt32(12, h3);
  retVal.setInt32(16, h4);
  retVal.setInt32(20, h5);
  retVal.setInt32(24, h6);
  retVal.setInt32(28, h7);

  return retVal.buffer;
};

const encoder = new TextEncoder();

/**
 * @param {string} password
 * @param {string} data
 */
const encrypto = (password, data) => {
  const base = new Uint8Array(sha256(encoder.encode(password)));
  let i = 0;
  let hash = new Uint8Array(sha256(base.buffer));
  const arr = new Uint8Array(data.split('').map(x=>x.charCodeAt(0))).map(v => {
    const retVal = v + hash[i++];
    if (i === 32) {
      i = 0;
      let g = 1;
      for (let j = 0; j < 32; j += 1) {
        g += base[j];
        base[j] = (g & 255);
        g >>= 8;
      }
      hash = new Uint8Array(sha256(base.buffer));
    }
    return retVal;
  });
  return btoa([...arr].map(x=>String.fromCharCode(x)).join(''));
};

/**
 * @param {string} password
 * @param {string} data
 */
const decrypto = (password, data) => {
  const base = new Uint8Array(sha256(encoder.encode(password)));
  let i = 0;
  let hash = new Uint8Array(sha256(base.buffer));
  const arr = new Uint8Array(atob(data).split('').map(x=>x.charCodeAt(0))).map(v => {
    const retVal = v - hash[i++];
    if (i === 32) {
      i = 0;
      let g = 1;
      for (let j = 0; j < 32; j += 1) {
        g += base[j];
        base[j] = (g & 255);
        g >>= 8;
      }
      hash = new Uint8Array(sha256(base.buffer));
    }
    return retVal;
  });
  return [...arr].map(x=>String.fromCharCode(x)).join('');
};

const password = window.prompt('パスワードを入力')?.trim();
const rightHash = '3328236998 1223133385 1997979040 2003998519 770592933 2615719006 4294551868 748931136';
if (typeof password === 'string') {
  const hash = sha256(encoder.encode(password.split('').reverse().join('')));
  if (new Uint32Array(hash).join(' ') === rightHash) {

    const blob = new Blob([decrypto(password, source)], {
      type: 'text/javascript',
    });

    const style = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: './main.css',
      onload() {
        const script = Object.assign(document.createElement('script'), {
          src: URL.createObjectURL(blob),
        });
        document.body.appendChild(script);
      },
    });
    document.head.appendChild(style);
  } else {
    window.alert('パスワードが違います');
  }
}
