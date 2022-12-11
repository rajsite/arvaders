import * as w4 from "../wasm4";
import { Image } from "./image";

class ImagePlayerBullet implements Image {
    width: i32 = 2;
    height: i32 = 6;
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0003);
        w4.rect(x, y, this.width, this.height);
    }
}

class ImageEnemyBullet implements Image {
    width: i32 = 2;
    height: i32 = 6;
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0004);
        w4.rect(x, y, this.width, this.height);
    }
}

export const imagePlayerBullet = new ImagePlayerBullet();
export const imageEnemyBullet = new ImageEnemyBullet();
