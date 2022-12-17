import { Bullet, Damage, Enemy, Health, Player, Position, Ship, Visual } from './components';
import { ComponentType } from "./components/types";

export class Entity {
    static create (): Entity {
        return new Entity();
    }
    static reset (entity: Entity): void {
        entity.exists = true;
        entity.components = 0;
        entity.bullet = null;
        entity.damage = null;
        entity.enemy = null;
        entity.health = null;
        entity.player = null;
        entity.position = null;
        entity.ship = null;
        entity.visual = null;
    }
    exists: boolean = true;
    components: ComponentType;
    bullet: Bullet | null;
    damage: Damage | null;
    enemy: Enemy | null;
    health: Health | null;
    player: Player | null;
    position: Position | null;
    ship: Ship | null;
    visual: Visual | null;
}
