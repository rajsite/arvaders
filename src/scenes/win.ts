import * as w4 from '../wasm4';
import * as scenes from './';
import { Scene } from "./types";

class Win extends Scene {
    private ticks: i32 = 0;
    private readonly maxTicks: i32 = 120;

    run(): Scene {
        this.ticks++;
        store<u16>(w4.DRAW_COLORS, 0x002);
        w4.text('You win! :)', 16, 90);
    
        if (this.ticks > this.maxTicks) {
            this.ticks = 0;
            return scenes.level1Start;
        }

        return win;
    }
}
export const win = new Win('win', true);
