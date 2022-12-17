import { firstAstralEntityWith, firstEntityWith } from "../world";
import { ComponentType } from "../components/types";
import * as gamepad from '../utilities/gamepad';
import * as w4 from "../wasm4";

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
