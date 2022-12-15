import { Scene } from './scenes/types';
import * as scenes from './scenes';

let scene: Scene = Scene.init;

export function runScene(): void {
    scene = execute();
}

function execute(): Scene {
    switch(scene) {
        case Scene.init:
            return scenes.init();
        case Scene.level_1_setup:
            return scenes.level_1_setup();
        case Scene.level_1_game:
            return scenes.level_1_game();
        case Scene.error:
            return scenes.error();
    }
    return Scene.error;
}
