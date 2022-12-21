import * as w4 from '../wasm4';
import * as scenes from './';
import { Scene } from "./types";
import * as images from '../images';
import { SCREEN_SIZE } from '../utilities/screen';

class Lose extends Scene {
    private ticks: i32 = 0;
    private readonly maxTicks: i32 = 120;

    run(): Scene {
        this.ticks++;
        store<u16>(w4.DRAW_COLORS, 0x002);
    
        images.lose.draw(
            SCREEN_SIZE/2 - images.lose.width/2,
            SCREEN_SIZE/2 - images.lose.height/2
        );
    
        if (this.ticks > this.maxTicks) {
            this.ticks = 0;
            return scenes.level1Start;
        }

        return lose;
    }
}
export const lose = new Lose('lose', true);
