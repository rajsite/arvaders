import { trace } from "../wasm4";
import * as scenes from './';
import { Scene } from "./types";

class Lose extends Scene {
    constructor() {
        super('lose', false);
    }

    run(): Scene {
        trace('lose');
        return scenes.level_1_setup;
    }
}

export const lose = new Lose();
