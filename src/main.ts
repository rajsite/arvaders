import { tick} from './utilities/tick';
import * as gamepad from './utilities/gamepad';
import { Scene } from './scenes/types';
import * as scenes from './scenes';

let scene: Scene = scenes.init;

export function update (): void {
    gamepad.update();
    tick(0,0);
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
