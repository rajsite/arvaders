import { Entity } from "../components/entity";
import * as gamepad from '../gamepad';
import * as w4 from "../wasm4";
import { Movement } from "./movement";

export const gamepadMovement: Movement = (entity: Entity): void => {
    if (gamepad.is & w4.BUTTON_RIGHT) {
        entity.position!.x = i32(Math.min(
            entity.position!.x + entity.position!.vx,
            w4.SCREEN_SIZE - entity.position!.width
        ));
    }
    if (gamepad.is & w4.BUTTON_LEFT) {
        entity.position!.x = i32(Math.max(
            entity.position!.x - entity.position!.vx,
            0
        ));
    }
}