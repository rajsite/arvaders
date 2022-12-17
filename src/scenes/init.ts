import * as w4 from '../wasm4';
import { Scene } from './types';
import * as scenes from './';

class Init extends Scene {
    run(): Scene {
        store<u32>(w4.PALETTE, 0x000000, 0 * sizeof<u32>());
        store<u32>(w4.PALETTE, 0xffffff, 1 * sizeof<u32>());
        store<u32>(w4.PALETTE, 0xff0000, 2 * sizeof<u32>());
        store<u32>(w4.PALETTE, 0x00ff00, 3 * sizeof<u32>());
        return scenes.level1Start;
    }
}

export const init = new Init('init', false);
