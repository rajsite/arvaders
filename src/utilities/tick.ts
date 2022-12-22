import * as w4 from "../wasm4";
import * as gamepad from './gamepad';
import { scaleTime } from "./time";

let count = 0;
export function tick (x: i32, y: i32): void {
    count++;
    const seconds: i32 = count/scaleTime(60);
    const show: bool = seconds % 2 === 0;

    store<u16>(w4.DRAW_COLORS, 0x002);
    if (gamepad.is & w4.BUTTON_1) {
        store<u16>(w4.DRAW_COLORS, 0x003);
    }

    if (show) {
        w4.text('x', 0, 0);
    }
};
