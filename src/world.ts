import { Entity } from './components/entity';
import {Health, Player, Position, Visual} from './components';
import { Pool } from './utilities/pool';

export enum ComponentType {
    health = 1,
    player = 2,
    position = 4,
    visual = 8
}

const entityPool = new Pool<Entity>(Entity.new, Entity.init);
const healthPool = new Pool<Health>(Health.new, Health.init);
const playerPool = new Pool<Player>(Player.new, Player.init);
const positionPool = new Pool<Position>(Position.new, Position.init);
const visualPool = new Pool<Visual>(Visual.new, Visual.init);

export function resetEntities (capacity: i32): void {
    entityPool.reset(capacity);
    healthPool.reset(capacity);
    playerPool.reset(capacity);
    positionPool.reset(capacity);
    visualPool.reset(capacity);
}

export function allocateEntity (components: i32): Entity {
    const entity = entityPool.allocate();
    entity.components = components;
    if (components & ComponentType.health) {
        entity.health = healthPool.allocate();
    }

    if (components & ComponentType.player) {
        entity.player = playerPool.allocate();
    }

    if (components & ComponentType.position) {
        entity.position = positionPool.allocate();
    }

    if (components & ComponentType.visual) {
        entity.visual = visualPool.allocate();
    }

    return entity;
}

class Matches {
    entities: Entity[] = new Array(Pool.MAX_CAPACITY);
    count: i32 = 0;
}
export const matches = new Matches();

export function entitiesAll(): void {
    matches.count = entityPool.allocated;
    for (let i = 0; i < entityPool.allocated; i++) {
        matches.entities[i] = entityPool.instances[i]!;
    }
}

export function entitiesWith (components: i32): void {
    matches.count = 0;
    for (let i = 0; i < entityPool.allocated; i++) {
        const entity = entityPool.instances[i]!;
        if ((entity.components & components) === components) {
            matches.entities[matches.count] = entity;
            matches.count++;
        }
    }
}
