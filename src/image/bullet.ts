import * as w4 from "../wasm4";

export enum BulletType {
    player = 0x0003,
    enemy = 0x0004,
}

export function draw (x: i32, y: i32, type: BulletType): void {
    store<u16>(w4.DRAW_COLORS, type);
    w4.rect(x, y, 2, 6);
};
