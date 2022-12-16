import { Entity } from "../entity";
import { SCREEN_SIZE } from "../utilities/screen";
import { Movement } from "./types";

export const forwardToAstral: Movement = (entity: Entity): void => {
    entity.position!.x += entity.position!.vx;
    entity.position!.y += entity.position!.vy;
    if (
        entity.position!.x < 0
        || entity.position!.y < 0
        || entity.position!.x > (SCREEN_SIZE - entity.position!.width)
        || entity.position!.y > (SCREEN_SIZE - entity.position!.height)
    ) {
        entity.exists = false;
    }
}
