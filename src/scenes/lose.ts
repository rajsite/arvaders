import { trace } from "../wasm4";
import { Scene } from "./types";

export function lose(): Scene {
    trace('lose');
    return Scene.level_1_setup;
}
