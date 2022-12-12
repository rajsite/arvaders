import { Scene } from './scene';
import * as scenes from './';

let scene: Scene = Scene.init;

export function run(): void {
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
