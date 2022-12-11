import * as w4 from "./wasm4";
import { ComponentType } from "./world";
import * as world from "./world";
import * as images from './images';
import * as systems from "./systems";

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
    player.position!.width = images.player.width;
    player.position!.height = images.player.height;
    player.position!.x = 0;
    player.position!.y = 160 - player.position!.height;
    player.visual!.image = images.player;

    const bulletPlayer = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    bulletPlayer.position!.width = images.playerBullet.width;
    bulletPlayer.position!.height = images.playerBullet.height;
    bulletPlayer.position!.x = 15;
    bulletPlayer.position!.y = 100;
    bulletPlayer.visual!.image = images.playerBullet;

    const bulletEnemy = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    bulletEnemy.position!.width = images.enemyBullet.width;
    bulletEnemy.position!.height = images.enemyBullet.height;
    bulletEnemy.position!.x = 15;
    bulletEnemy.position!.y = 60;
    bulletEnemy.visual!.image = images.enemyBullet;

    const enemy = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    enemy.position!.width = images.invader.width;
    enemy.position!.height = images.invader.height;
    enemy.position!.x = 0;
    enemy.position!.y = 0;
    enemy.visual!.image = images.invader;

    const boss = world.allocateEntity(
        ComponentType.position |
        ComponentType.visual
    );
    boss.position!.width = images.boss.width;
    boss.position!.height = images.boss.height;
    boss.position!.x = 80;
    boss.position!.y = 0;
    boss.visual!.image = images.boss;
    return Scene.level_1;
}

function level_1(): Scene {
    systems.render();
    return Scene.level_1;
}

function error(): Scene {
    store<u16>(w4.DRAW_COLORS, 0x002);
    w4.text("Error :(", 16, 90);
    return Scene.error;
}
