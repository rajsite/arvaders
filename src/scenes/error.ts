import * as w4 from '../wasm4';
import { Scene } from './types';
import * as scenes from './';

class Error extends Scene {
    run(): Scene {
        store<u16>(w4.DRAW_COLORS, 0x002);
        w4.text('Error :(', 16, 90);
        return scenes.error;
    }
}

export const error = new Error('error', true);
