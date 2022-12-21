import { Entity } from "../entity";
import { SCREEN_SIZE } from "../utilities/screen";
import { Movement } from "./types";

export const sideToSide: Movement = (entity: Entity): void => {
    if (entity.position!.vx > 0) {
        entity.position!.x = i32(Math.min(
            entity.position!.x + entity.position!.vx,
            SCREEN_SIZE - entity.position!.width
        ));
    } else {
        entity.position!.x = i32(Math.max(
            entity.position!.x + entity.position!.vx,
            0
        ));
    }
    if (entity.position!.x === 0 || 
        entity.position!.x === SCREEN_SIZE - entity.position!.width) {
        entity.position!.vx = -1 * entity.position!.vx;
        entity.position!.y += entity.position!.height;
    }
    if (entity.position!.y + entity.position!.height > SCREEN_SIZE) {
        entity.position!.y = 0;
    }
}
