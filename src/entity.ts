import { Health, Player, Position, Visual } from './components';
import { ComponentType } from "./components/types";

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
