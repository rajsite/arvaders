import { ComponentType } from "../components/types";
import * as world from '../world';
import * as images from '../images';
import * as systems from '../systems';
import * as movements from '../movements';
import { initializeVisualPosition } from '../initializers';
import { Condition } from '../systems';
import * as scenes from '.';
import { Scene } from "./types";
import { SCREEN_SIZE } from "../utilities/screen";
import { scaleVelocity } from "../utilities/time";

class Level1Start extends Scene {
    run(): Scene {
        world.resetEntities(18);

        const player = world.allocateEntity(
            ComponentType.player |
            ComponentType.ship |
            ComponentType.position |
            ComponentType.visual | 
            ComponentType.health
        );
        initializeVisualPosition(player, images.player);
        player.position!.x = 0;
        player.position!.y = SCREEN_SIZE - player.position!.height;
        player.position!.vx = scaleVelocity(4);
        player.position!.vy = scaleVelocity(0);
        player.position!.movement = movements.gamepadLeftRight;
        player.health!.value = 100;

        for (let i = 0; i < 4; i++) {
            const enemy = world.allocateEntity(
                ComponentType.enemy |
                ComponentType.ship |
                ComponentType.position |
                ComponentType.visual | 
                ComponentType.health |
                ComponentType.attack
            );
            initializeVisualPosition(enemy, images.invader);
            enemy.position!.x = ((enemy.position!.width + 10) * i);  
            enemy.position!.y = 0;
            enemy.position!.vx = scaleVelocity(1);
            enemy.position!.vy = scaleVelocity(0);
            enemy.position!.movement = movements.sideToSide;
            enemy.health!.value = 100;
            enemy.attack!.attackInterval = 50;
            enemy.attack!.lastAttack = i * 20 + i;
        }
    
        for (let i = 0; i < 3; i++) {
            const bullet = world.allocateEntity(
                ComponentType.player |
                ComponentType.bullet |
                ComponentType.position |
                ComponentType.visual | 
                ComponentType.damage
            );
            initializeVisualPosition(bullet, images.playerBullet);
            bullet.exists = false;
            bullet.position!.movement = movements.forwardToAstral;
            bullet.damage!.value = 50;
            bullet.position!.vx = scaleVelocity(0);
            bullet.position!.vy = scaleVelocity(-2);
        }

        for (let i = 0; i < 10; i++) {
            const bullet = world.allocateEntity(
                ComponentType.enemy |
                ComponentType.bullet |
                ComponentType.position |
                ComponentType.visual | 
                ComponentType.damage
            );
            initializeVisualPosition(bullet, images.enemyBullet);
            bullet.exists = false;
            bullet.position!.movement = movements.forwardToAstral;
            bullet.damage!.value = 50;
            bullet.position!.vy = scaleVelocity(0);
            bullet.position!.vy = scaleVelocity(2);
        }
    
        return scenes.level1Update;
    }
}
export const level1Start = new Level1Start('level1Start', false);

class Level1Update extends Scene {
    run(): Scene {
        systems.damage();
        systems.move();
        systems.playerFire();
        systems.enemyFire();
        systems.render();
        const condition = systems.condition();
        if (condition === Condition.win) {
            return scenes.win;
        } else if (condition === Condition.lose) {
            return scenes.lose;
        }
        return scenes.level1Update;
    }
}

export const level1Update = new Level1Update('level1Update', true);
