import { query } from "../world";
import { ComponentType } from "../components/types";

export function move(): void {
    query.entitiesWith(ComponentType.position);
    for (let i = 0; i < query.count; i++) {
        const entity = query.matches[i];
        const movement = entity.position!.movement;
        if (movement) {
            movement(entity);
        }
    }
}
