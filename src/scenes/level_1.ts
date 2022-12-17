import { ComponentType } from "../components/types";
import * as world from '../world';
import * as images from '../images';
import * as systems from '../systems';
import * as movements from '../movements';
import { initializeVisualPosition } from '../initializers';
import * as w4 from "../wasm4";
import { Condition } from '../systems';
import * as scenes from './';
import { Scene } from "./types";

class Level1Setup extends Scene {
    constructor() {
        super('level_1_setup', false);
    }

    run(): Scene {
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
    
        return scenes.level_1_game;
    }
}
export const level_1_setup = new Level1Setup();

class Level1Game extends Scene {
    constructor() {
        super('level_1_game', true);
    }

    run(): Scene {
        systems.damage();
        systems.move();
        systems.playerFire();
        systems.render();
        const condition = systems.condition();
        if (condition === Condition.win) {
            return scenes.level_1_outro;
        } else if (condition === Condition.lose) {
            return scenes.lose;
        }
        return scenes.level_1_game;
    }
}

export const level_1_game = new Level1Game();

class Level1Outro extends Scene {
    constructor() {
        super('level_1_outro', false);
    }

    run(): Scene {
        w4.trace('level one outro');
        return scenes.win;
    }
}

export const level_1_outro = new Level1Outro();
