import { trace } from "../wasm4";
import * as scenes from './';
import { Scene } from "./types";

class Win extends Scene {
    run(): Scene {
        trace(this.name);
        return scenes.level1Start;
    }
}

export const win = new Win('win', false);
