import { query } from "../world";
import { ComponentType } from "../components/types";

export function render(): void {
    query.entitiesWith(ComponentType.visual);
    for (let i = 0; i < query.count; i++) {
        const entity = query.matches[i];
        entity.visual!.image!.draw(
            entity.position!.x,
            entity.position!.y,
        )
    }
}
