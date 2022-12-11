import { allEntities, matches } from "../world";

export function render(): void {
    allEntities();
    for (let i = 0; i < matches.count; i++) {
        const entity = matches.entities[i];
        entity.visual!.image!.draw(
            entity.position!.x,
            entity.position!.y,
        )
    }
}
