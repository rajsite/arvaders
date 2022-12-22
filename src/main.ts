import { Scene } from './scenes/types';
import * as scenes from './scenes';
import * as gamepad from './utilities/gamepad';


let scene: Scene = scenes.init;

export function update (): void {
    gamepad.update();
    runScene();
}

export function start (): void {
    runScene();
}

function runScene(): void {
    do {
        scene = scene.run();
    } while (scene.renders === false);
}
