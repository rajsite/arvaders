import * as w4 from "../wasm4";
import { Image } from "./image";

class PlayerBulletImage extends Image {
    constructor () {
        super();
        this.width = 2;
        this.height = 6;
    }
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0003);
        w4.rect(x, y, this.width, this.height);
    }
}

class EnemyBulletImage extends Image {
    constructor () {
        super();
        this.width = 2;
        this.height = 6;
    }
    draw (x: i32, y: i32): void {
        store<u16>(w4.DRAW_COLORS, 0x0004);
        w4.rect(x, y, this.width, this.height);
    }
}

export const playerBullet = new PlayerBulletImage();
export const enemyBullet = new EnemyBulletImage();
