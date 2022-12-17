import { Entity } from "../entity";
import * as gamepad from '../utilities/gamepad';
import { SCREEN_SIZE } from "../utilities/screen";
import * as w4 from "../wasm4";
import { Movement } from "./types";

export const gamepadLeftRight: Movement = (entity: Entity): void => {
    if (gamepad.is & w4.BUTTON_RIGHT) {
        entity.position!.x = i32(Math.min(
            entity.position!.x + entity.position!.vx,
            SCREEN_SIZE - entity.position!.width
        ));
    }
    if (gamepad.is & w4.BUTTON_LEFT) {
        entity.position!.x = i32(Math.max(
            entity.position!.x - entity.position!.vx,
            0
        ));
    }
}
