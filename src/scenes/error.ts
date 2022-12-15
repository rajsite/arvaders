import * as w4 from '../wasm4';
import { Scene } from './types';

export function error(): Scene {
    store<u16>(w4.DRAW_COLORS, 0x002);
    w4.text('Error :(', 16, 90);
    return Scene.error;
}
