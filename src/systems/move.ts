import { ComponentType, entitiesWith, matches } from "../world";

export function move(): void {
    entitiesWith(ComponentType.position);
    for (let i = 0; i < matches.count; i++) {
        const entity = matches.entities[i];
        const movement = entity.position!.movement;
        if (movement) {
            movement(entity);
        }
    }
}
