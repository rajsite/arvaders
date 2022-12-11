import { Position } from "./position";
import { Player } from "./player";
import { Health } from "./health";
import { Visual } from "./visual";

export class Entity {
    static init (entity: Entity): void {
        entity.components = 0;
        entity.health = null;
        entity.player = null;
        entity.position = null;
        entity.visual = null;
    }
    components: i32;
    health: Health | null;
    player: Player | null;
    position: Position | null;
    visual: Visual | null;
}
