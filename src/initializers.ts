import { Entity } from "./entity";
import { Image } from "./images/types";

export function initializeVisualPosition (entity: Entity, image: Image): void {
    entity.position!.width = image.width;
    entity.position!.height = image.height;
    entity.visual!.image = image;
}
