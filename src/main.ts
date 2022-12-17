import { tick} from './utilities/tick';
import { Scene } from './scenes/types';
import * as scenes from './scenes';

let scene: Scene = scenes.init;

export function update (): void {
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
