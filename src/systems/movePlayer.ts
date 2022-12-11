import { ComponentType, entitiesWith, matches } from "../world";
import * as w4 from "../wasm4";
import * as gamepad from '../gamepad';

export function movePlayer(): void {
    entitiesWith(ComponentType.player
        | ComponentType.position);
    // Assume just one player :X
    const entity = matches.entities[0];
    if (gamepad.is & w4.BUTTON_RIGHT) {
        entity.position!.x += entity.position!.vx;
    }
    if (gamepad.is & w4.BUTTON_LEFT) {
        entity.position!.x -= entity.position!.vx;
    }
}
