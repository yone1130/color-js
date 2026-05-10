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

export class Color {
    /**
     * Initialize Color from RGBA
     * @param red Red
     * @param green Green
     * @param blue Blue
     * @param alpha Alpha
     */
    static rgba(red: number, green: number, blue: number, alpha = 255): Color {
        const components = [red, green, blue, alpha];

        if (components.some(c => !Number.isInteger(c) || c < 0 || c > 255)) {
            throw new Error(`Invalid RGBA components: ${components.join(', ')}`);
        }

        const value = ((red << 24) | (green << 16) | (blue << 8) | alpha) >>> 0;
        return new Color(value);
    }

    /**
     * Initialize Color from HEX string
     * 
     * Prefix `#` is optional.
     * @param value HEX color string
     */
    static hex(value: string): Color {
        const hexString = value.replace("#", "");

        if (!/^[0-9a-fA-F]{3,8}$/.test(hexString) || ![3, 4, 6, 8].includes(hexString.length)) {
            throw new Error(`Invalid HEX string: ${value}`);
        }

        const [redString, greenString, blueString, alphaString] = Color.#parseHexString(value);

        return Color.rgba(
            parseInt(redString, 16),
            parseInt(greenString, 16),
            parseInt(blueString, 16),
            parseInt(alphaString, 16),
        );
    }

    /**
     * Split each color elements from HEX string
     * @param value HEX color string
     */
    static #parseHexString(value: string): [string, string, string, string] {
        if (value.length === 3 || value.length === 4) {
            return [
                value[0].repeat(2) ?? "00",
                value[1].repeat(2) ?? "00",
                value[2].repeat(2) ?? "00",
                value[3]?.repeat(2) ?? "ff",
            ];
        }
        return [
            value.slice(0, 2),
            value.slice(2, 4),
            value.slice(4, 6),
            value.slice(6, 8) || "ff",
        ];
    }

    /**
     * @param value Color number
     */
    constructor(value: number) {
        if (!Number.isInteger(value) || value < 0 || value > 0xffffffff) {
            throw new Error(`Invalid color value: ${value}`);
        }

        this.#value = value >>> 0;
    }

    /**
     * Color - HEX string of RGBA
     */
    get hexString(): string {
        return this.#value.toString(16).padStart(8, '0');
    }

    /**
     * Red
     */
    get red(): number {
        return (this.#value >>> 24) & 0xff;
    }

    /**
     * Green
     */
    get green(): number {
        return (this.#value >>> 16) & 0xff;
    }

    /**
     * Blue
     */
    get blue(): number {
        return (this.#value >>> 8) & 0xff;
    }

    /**
     * Alpha
     */
    get alpha(): number {
        return this.#value & 0xff;
    }

    /**
     * Color - number of RGBA
     */
    #value: number;

    /**
     * Convert to RGBA
     */
    toRGBA(): [number, number, number, number] {
        return [
            this.red,
            this.green,
            this.blue,
            this.alpha,
        ]
    }

    /**
     * Convert to HEX string
     * @param [includePrefix=true] Should add prefix `#`
     */
    toHex(includePrefix = true): string {
        return includePrefix ? `#${this.hexString}` : this.hexString;
    }

    /**
     * Convert to string
     */
    toString(): string {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha / 255})`;
    }
}
