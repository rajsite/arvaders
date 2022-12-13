import { Scene } from './scene';
import { ComponentType } from '../world';
import * as world from '../world';
import * as images from '../images';
import * as systems from '../systems';
import { gamepadMovement } from '../movement/gamepad';
import { initializeVisualPosition } from './initializers';

export function level_1_setup(): Scene {
    world.resetEntities(5);

    const player = world.allocateEntity(
        ComponentType.player |
        ComponentType.position |
        ComponentType.visual
    );
    initializeVisualPosition(player, images.player);
    player.position!.x = 0;
    player.position!.y = 160 - player.position!.height;
    player.position!.vx = 5;
    player.position!.vy = 0;
    player.position!.movement = gamepadMovement;

    const enemy = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    initializeVisualPosition(enemy, images.invader);
    enemy.position!.x = 0;
    enemy.position!.y = 0;
    return Scene.level_1_game;
}

export function level_1_game(): Scene {
    systems.move();
    systems.render();
    return Scene.level_1_game;
}
