const source =
  "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";

/**
 * @param {ArrayBuffer} data
 * @returns {ArrayBuffer}
 */
const sha256 = (data) => {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  const rightRotate = (a, b) => {
    return (a >>> b) | (a << (32 - b));
  };

  const message = new DataView(
    new ArrayBuffer(((data.byteLength + 72) >>> 6) * 64),
  );
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

  // deno-fmt-ignore
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
      const s0 = rightRotate(w[i - 15], 7) ^ rightRotate(w[i - 15], 18) ^
        (w[i - 15] >>> 3);
      const s1 = rightRotate(w[i - 2], 17) ^ rightRotate(w[i - 2], 19) ^
        (w[i - 2] >>> 10);
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
  retVal.setInt32(0, h0);
  retVal.setInt32(4, h1);
  retVal.setInt32(8, h2);
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
const decrypto = (password, data) => {
  const base = new Uint8Array(sha256(encoder.encode(`${password}1`)));
  let i = 0;
  let hash = new Uint8Array(sha256(base.buffer));
  const arr = new Uint8Array(atob(data).split("").map((x) => x.charCodeAt(0)))
    .map((v) => {
      const retVal = v - hash[i++];
      if (i === 32) {
        i = 0;
        let g = 1;
        for (let j = 0; j < 32; j += 1) {
          g += base[j];
          base[j] = g & 255;
          g >>= 8;
        }
        hash = new Uint8Array(sha256(base.buffer));
      }
      return retVal;
    });
  return [...arr].map((x) => String.fromCharCode(x)).join("");
};

const password = localStorage.getItem('password') ?? window.prompt('パスワードを入力')?.trim();
const rightHash =
  "3328236998 1223133385 1997979040 2003998519 770592933 2615719006 4294551868 748931136";
if (typeof password === "string") {
  const hash = sha256(encoder.encode(password.split("").reverse().join("")));
  console.log(new Uint32Array(hash).join(" "));
  if (new Uint32Array(hash).join(" ") === rightHash) {
    localStorage.setItem('password', password);

    const blob = new Blob([decrypto(password, source)], {
      type: "text/javascript",
    });

    const script = Object.assign(document.createElement("script"), {
      src: URL.createObjectURL(blob),
    });
    document.body.appendChild(script);
  } else {
    window.alert("パスワードが違います");
  }
}
