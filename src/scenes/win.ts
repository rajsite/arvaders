import { trace } from "../wasm4";
import * as scenes from './';
import { Scene } from "./types";

class Win extends Scene {
    constructor() {
        super('win', false);
    }

    run(): Scene {
        trace('win');
        return scenes.level_1_setup;
    }
}

export const win = new Win();
