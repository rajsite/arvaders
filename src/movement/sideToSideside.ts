import { Entity } from "../components/entity";
import * as w4 from "../wasm4";
import { Movement } from "./movement";

export const sideToSideMovement: Movement = (entity: Entity): void => {
    if (entity.position!.vx > 0) {
        entity.position!.x = i32(Math.min(
            entity.position!.x + entity.position!.vx,
            w4.SCREEN_SIZE - entity.position!.width
        ));
    } else {
        entity.position!.x = i32(Math.max(
            entity.position!.x + entity.position!.vx,
            0
        ));
    }
    if (entity.position!.x === 0 || 
        entity.position!.x === i32(w4.SCREEN_SIZE - entity.position!.width)) {
        entity.position!.vx = -1 * entity.position!.vx;
    }
}
