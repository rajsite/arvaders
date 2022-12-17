import { trace } from "../wasm4";
import { Scene } from "./types";

export function win(): Scene {
    trace('win');
    return Scene.level_1_setup;
}
