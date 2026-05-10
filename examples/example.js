/*!
 *
 * Color.js
 *
 * Copyright (C) 2026 よね/Yone
 * Licensed under the MIT License.
 *
 * https://github.com/yone1130/color-js
 *
 */

import { Color } from "../src/color.ts";

main();

function main() {
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


    /* Getters */
    console.log(rgbColor.toHex());       // => "#ff1f1fff"
    console.log(rgbColor.toHex(false));  // => "ff1f1fff"
    console.log(rgbColor.toRGBA());      // => [255, 31, 31, 255]
    console.log(rgbColor.toString());    // => "rgba(255, 31, 31, 1)"


    /* Propaties */
    console.log(hexColor8.red);        // 161
    console.log(hexColor8.green);      // 178
    console.log(hexColor8.blue);       // 195
    console.log(hexColor8.alpha);      // 127
    console.log(hexColor8.hexString);  // "a1b2c380"
}
