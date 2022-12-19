import { firstAstralEntityWith, firstEntityWith } from "../world";
import { ComponentType } from "../components/types";
import * as gamepad from '../utilities/gamepad';
import * as w4 from "../wasm4";
import { query } from "../world";


export function playerFire(): void {
    if (gamepad.justPressed & w4.BUTTON_1) {
        const bullet = firstAstralEntityWith(
            ComponentType.player
            | ComponentType.bullet
            | ComponentType.position
        );
        if (bullet) {
            const player = firstEntityWith(
                ComponentType.player
                | ComponentType.ship
                | ComponentType.position
            );
            if (player) {
                const x = player.position!.x
                    + player.position!.width / 2
                    - bullet.position!.width /2;
                const y = player.position!.y
                    - bullet.position!.height;
                bullet.position!.x = x;
                bullet.position!.y = y;
                bullet.exists = true;
            }
        }
    }
}

export function enemyFire(): void {
    const enemies = query;
    enemies.entitiesWith(
        ComponentType.enemy
        | ComponentType.position
        | ComponentType.attack
    );
    for (let i = 0; i < enemies.count; i++) {
        const enemy = enemies.matches[i];
        const attack = enemy.attack!;
        attack.lastAttack++;

        if (attack.lastAttack > attack.attackInterval) {
            const bullet = firstAstralEntityWith(
                ComponentType.enemy
                | ComponentType.bullet
                | ComponentType.position
            );
            if (bullet) {
                const x = enemy.position!.x
                    + enemy.position!.width / 2
                    - bullet.position!.width /2;
                const y = enemy.position!.y
                    + enemy.position!.height;
                bullet.position!.x = x;
                bullet.position!.y = y;
                bullet.exists = true;
                attack.lastAttack = 0;
            }
        }
    }
}
