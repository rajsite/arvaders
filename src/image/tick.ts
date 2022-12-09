import * as w4 from "../wasm4";

let count = 0;
export function draw (x: i32, y: i32): void {
    count++;
    const scaledCount: i32 = count/20;
    const show: bool = scaledCount % 2 === 0;
    if (show) {
        store<u16>(w4.DRAW_COLORS, 2);
        w4.text('x', 0, 0);
    }
};
