import { Scene } from './scene';
import { ComponentType } from '../world';
import * as world from '../world';
import * as images from '../images';
import * as systems from '../systems';

export function level_1_setup(): Scene {
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
    player.position!.vx = 5;
    player.position!.vy = 0;
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
    return Scene.level_1_game;
}

export function level_1_game(): Scene {
    systems.movePlayer();
    systems.render();
    return Scene.level_1_game;
}
