import * as w4 from "../wasm4";
import { Image } from "./image";

const flags = w4.BLIT_1BPP;
const data = memory.data<u8>([
    0b11000011,
    0b10000001,
    0b00100100,
    0b00100100,
    0b00000000,
    0b00100100,
    0b10011001,
    0b11000011,
]);

class SmileyImage implements Image {
    width: i32 = 8;
    height: i32 = 8;
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0002);
        w4.blit(data, x, y, this.width, this.height, flags);    
    }
}

export const smiley = new SmileyImage();
