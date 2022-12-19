import { Damage, Health, Position, Visual } from './components';
import { ComponentType } from "./components/types";

export class Entity {
    static create (): Entity {
        return new Entity();
    }
    static reset (entity: Entity): void {
        entity.exists = true;
        entity.components = 0;
        entity.damage = null;
        entity.health = null;
        entity.position = null;
        entity.visual = null;
    }
    exists: boolean = true;
    components: ComponentType;
    damage: Damage | null;
    health: Health | null;
    position: Position | null;
    visual: Visual | null;
}
