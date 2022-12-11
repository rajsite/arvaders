import * as w4 from "../wasm4";
import { Image } from "./image";
import { imageInvader, data } from "./invader";

export const width = imageInvader.width * 2 - 10;
export const height = imageInvader.height;

class ImageBoss implements Image {
    width: i32 = 32;
    height: i32 = 32;
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0342);
        w4.blit(data, x, y, imageInvader.width, imageInvader.height, w4.BLIT_2BPP | w4.BLIT_FLIP_X);
        w4.blit(data, x + 20, y, imageInvader.width, imageInvader.height, w4.BLIT_2BPP);
    }
}

export const imageBoss = new ImageBoss();
