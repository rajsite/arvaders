import { Position } from "./position";
import { Player } from "./player";
import { Health } from "./health";
import { Visual } from "./visual";

export enum ComponentType {
    health = 1 << 0,
    player = 1 << 1,
    position = 1 << 2,
    visual = 1 << 3
}

export class Entity {
    static create (): Entity {
        return new Entity();
    }
    static reset (entity: Entity): void {
        entity.components = 0;
        entity.health = null;
        entity.player = null;
        entity.position = null;
        entity.visual = null;
    }
    components: ComponentType;
    health: Health | null;
    player: Player | null;
    position: Position | null;
    visual: Visual | null;
}
