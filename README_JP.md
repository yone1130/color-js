# Color.js

[Read in English >](./README.md)

## Overview

**Color.js** は、TypeScript / JavaScript 用のカラーを扱うライブラリです。

## Usage

サンプルコード:
```js
/* from RGB */
const rgbColor = Color.rgba(255, 31, 31);

/* from RGBA */
const rgbaColor = Color.rgba(31, 255, 31, 127);

/* from 6 HEX (#RRGGBB)*/
const hexColor6 = Color.hex("#1a2b3c");

/* from 8 HEX (RRGGBBAA) - prefix `#` is optional */
const hexColor8 = Color.hex("a1b2c37f");

/* from 3 HEX (#RGB) */
const hexColor3 = Color.hex("#333");

/* from 4 HEX (RGBA) - prefix `#` is optional */
const hexColor4 = Color.hex("eee8");

/* from direct HEX number (RGBA) */
const rawColor = new Color(0xd1c2b3a4);

/* Getters */
console.log(rgbColor.toHex());       // => "#ff1f1fff"
console.log(rgbColor.toHex(false));  // => "ff1f1fff"
console.log(rgbColor.toRGBA());      // => [255, 31, 31, 255]
console.log(rgbColor.toString());    // => "rgba(255, 31, 31, 1)"
console.log(rawColor.toHex());    // => "#d1c2b3a4"

/* Propaties */
console.log(hexColor8.red);        // 161
console.log(hexColor8.green);      // 178
console.log(hexColor8.blue);       // 195
console.log(hexColor8.alpha);      // 127
console.log(hexColor8.hexString);  // "a1b2c380"
```

### サンプルコード

- **サンプルコード: [examples/](./examples/).**

## 開発

### 1. パッケージをインストールする

```bash
pnpm i
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
pnpm run build
```

コンパイルされたJavaScriptファイルが dist/ ディレクトリに出力されます。

## ライセンス

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright © 2026 よね/Yone
