import { ComponentType, entitiesWith, matches } from "../world";

export function render(): void {
    entitiesWith(ComponentType.visual);
    for (let i = 0; i < matches.count; i++) {
        const entity = matches.entities[i];
        entity.visual!.image!.draw(
            entity.position!.x,
            entity.position!.y,
        )
    }
}
