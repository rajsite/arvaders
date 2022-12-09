import * as w4 from "../wasm4";
import {
    data,
    width as invaderWidth,
    height as invaderHeight
} from "./invader";

export const width = invaderWidth *2 -10;
export const height = invaderHeight;

export function draw (x: i32, y: i32): void {
    store<u16>(w4.DRAW_COLORS, 0x0342);
    w4.blit(data, x, y, invaderWidth, invaderHeight, w4.BLIT_2BPP | w4.BLIT_FLIP_X);
    w4.blit(data, x + 20, y, invaderWidth, invaderHeight, w4.BLIT_2BPP);
};