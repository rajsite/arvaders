import * as w4 from "./wasm4";
import { ComponentType } from "./world";
import * as world from "./world";
import { imageEnemyBullet, imagePlayerBullet } from "./image/bullet";
import { imageInvader } from "./image/invader";
import { imageBoss } from "./image/boss";
import {imagePlayer} from './image/player';
import { render } from "./systems/render";

enum Scene {
    init,
    level_1_setup,
    level_1,
    error
}
let scene: Scene = Scene.init;

export function run(): void {
    scene = execute();
}

function execute(): Scene {
    switch(scene) {
        case Scene.init:
            return init();
        case Scene.level_1_setup:
            return level_1_setup();
        case Scene.level_1:
            return level_1();
        case Scene.error:
            return error();
    }
    return Scene.error;
}

function init(): Scene {
    store<u32>(w4.PALETTE, 0x000000, 0 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xffffff, 1 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xff0000, 2 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0x00ff00, 3 * sizeof<u32>());
    return Scene.level_1_setup;
}

function level_1_setup(): Scene {
    world.resetEntities(5);

    const player = world.allocateEntity(
        ComponentType.player |
        ComponentType.position |
        ComponentType.visual
    );
    player.position!.width = imagePlayer.width;
    player.position!.height = imagePlayer.height;
    player.position!.x = 0;
    player.position!.y = 160 - player.position!.height;
    player.visual!.image = imagePlayer;

    const bulletPlayer = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    bulletPlayer.position!.width = imagePlayerBullet.width;
    bulletPlayer.position!.height = imagePlayerBullet.height;
    bulletPlayer.position!.x = 15;
    bulletPlayer.position!.y = 100;
    bulletPlayer.visual!.image = imagePlayerBullet;

    const bulletEnemy = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    bulletEnemy.position!.width = imageEnemyBullet.width;
    bulletEnemy.position!.height = imageEnemyBullet.height;
    bulletEnemy.position!.x = 15;
    bulletEnemy.position!.y = 60;
    bulletEnemy.visual!.image = imageEnemyBullet;

    const enemy = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    enemy.position!.width = imageInvader.width;
    enemy.position!.height = imageInvader.height;
    enemy.position!.x = 0;
    enemy.position!.y = 0;
    enemy.visual!.image = imageInvader;

    const boss = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    boss.position!.width = imageBoss.width;
    boss.position!.height = imageBoss.height;
    boss.position!.x = 80;
    boss.position!.y = 0;
    boss.visual!.image = imageBoss;
    return Scene.level_1;
}

function level_1(): Scene {
    render();
    return Scene.level_1;
}

function error(): Scene {
    store<u16>(w4.DRAW_COLORS, 0x002);
    w4.text("Error :(", 16, 90);
    return Scene.error;
}
