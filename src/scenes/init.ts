import * as w4 from '../wasm4';
import { Scene } from './types';

export function init(): Scene {
    store<u32>(w4.PALETTE, 0x000000, 0 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xffffff, 1 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xff0000, 2 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0x00ff00, 3 * sizeof<u32>());
    return Scene.level_1_setup;
}
