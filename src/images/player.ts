import * as w4 from "../wasm4";
import { Image } from "./types";

const flags = w4.BLIT_2BPP;
const data = memory.data<u8>([ 0x55,0x55,0x55,0x55,0x55,0x55,0x55,0x55,0x55,0x55,0x55,0x40,0x01,0x55,0x55,0x55,0x55,0x55,0x55,0x3f,0xfc,0x55,0x55,0x55,0x55,0x55,0x55,0x30,0x0c,0x55,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x55,0x54,0xc0,0x03,0x15,0x55,0x55,0x55,0x50,0x54,0xc3,0xc3,0x15,0x05,0x55,0x55,0x4f,0x14,0xcc,0x33,0x14,0xf1,0x55,0x55,0x30,0xc4,0xcc,0x33,0x13,0x0c,0x55,0x55,0x33,0xc3,0xcc,0x33,0xc3,0x3c,0x55,0x55,0x33,0xcc,0xcc,0x33,0x33,0x3c,0x55,0x55,0x33,0xf0,0xcc,0x33,0x0f,0x3c,0x55,0x55,0x33,0xc0,0xcc,0x33,0x03,0x3c,0x55,0x55,0x33,0x00,0x0c,0xf0,0x00,0xfc,0x55,0x55,0x3c,0x00,0x0f,0xf0,0x00,0x3c,0x55,0x55,0x30,0x00,0x0f,0xf0,0x00,0x0c,0x55,0x54,0xc0,0xa0,0x0f,0xf0,0x0a,0x83,0x15,0x53,0x02,0x08,0x0f,0xf0,0x08,0x20,0xc5,0x4c,0x02,0xa8,0xc3,0xc3,0x0a,0x80,0x31,0x53,0x02,0x08,0xc0,0x03,0x08,0x20,0xc5,0x53,0x00,0x00,0xc0,0x03,0x00,0x00,0xc5,0x54,0xff,0x00,0xc0,0x03,0x00,0xff,0x15,0x55,0x3f,0xff,0xc0,0x03,0xff,0xfc,0x55,0x55,0x4f,0x00,0x3f,0xfc,0x00,0xf1,0x55,0x55,0x6a,0x95,0x40,0x01,0x56,0xa9,0x55,0x55,0xaa,0xa5,0x55,0x55,0x5a,0xaa,0x55,0x56,0xaa,0xa9,0x55,0x55,0x6a,0xaa,0x95,0x5a,0xaa,0xaa,0x55,0x55,0xaa,0xaa,0xa5 ]);

class Player extends Image {
    constructor () {
        super();
        this.width = 32;
        this.height = 32;
    }
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x1302);
        w4.blit(data, x, y, this.width, this.height, flags);    
    };
}

export const player = new Player();
