import { Position } from "./components/position";
import { Player } from "./components/player";
import { Health } from "./components/health";
import { Visual } from "./components/visual";

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
