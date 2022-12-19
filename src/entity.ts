import { Damage, Health, Position, Visual } from './components';
import { Attack } from './components/attack';
import { ComponentType } from "./components/types";

export class Entity {
    static create (): Entity {
        return new Entity();
    }
    static reset (entity: Entity): void {
        entity.exists = true;
        entity.components = 0;

        entity.attack = null;
        entity.damage = null;
        entity.health = null;
        entity.position = null;
        entity.visual = null;
    }
    exists: boolean = true;
    components: ComponentType;

    attack: Attack | null;
    damage: Damage | null;
    health: Health | null;
    position: Position | null;
    visual: Visual | null;
}
