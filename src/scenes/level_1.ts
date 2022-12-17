import { Scene } from './types';
import { ComponentType } from "../components/types";
import * as world from '../world';
import * as images from '../images';
import * as systems from '../systems';
import * as movements from '../movements';
import { initializeVisualPosition } from '../initializers';
import * as w4 from "../wasm4";
import { Condition } from '../systems';

export function level_1_setup(): Scene {
    world.resetEntities(5);

    const player = world.allocateEntity(
        ComponentType.player |
        ComponentType.ship |
        ComponentType.position |
        ComponentType.visual | 
        ComponentType.health
    );
    initializeVisualPosition(player, images.player);
    player.position!.x = 0;
    player.position!.y = w4.SCREEN_SIZE - player.position!.height;
    player.position!.vx = 8;
    player.position!.vy = 0;
    player.position!.movement = movements.gamepadLeftRight;
    player.health!.value = 100;

    const enemy = world.allocateEntity(
        ComponentType.enemy |
        ComponentType.ship |
        ComponentType.position |
        ComponentType.visual | 
        ComponentType.health
    );
    initializeVisualPosition(enemy, images.invader);
    enemy.position!.x = 0;
    enemy.position!.y = 0;
    enemy.position!.vx = 2;
    enemy.position!.movement = movements.sideToSide;
    enemy.health!.value = 100;

    for (let i = 0; i < 3; i++) {
        const bullet = world.allocateEntity(
            ComponentType.player |
            ComponentType.bullet |
            ComponentType.position |
            ComponentType.visual | 
            ComponentType.damage
        );
        initializeVisualPosition(bullet, images.enemyBullet);
        bullet.exists = false;
        bullet.position!.movement = movements.forwardToAstral;
        bullet.damage!.value = 50;
        bullet.position!.vy = -2;
    }

    return Scene.level_1_game;
}

export function level_1_game(): Scene {
    systems.damage();
    systems.move();
    systems.playerFire();
    systems.render();
    const condition = systems.condition();
    if (condition === Condition.win) {
        return Scene.level_1_outro;
    } else if (condition === Condition.lose) {
        return Scene.lose;
    }
    return Scene.level_1_game;
}

export function level_1_outro(): Scene {
    w4.trace('level one outro');
    return Scene.win;
}
