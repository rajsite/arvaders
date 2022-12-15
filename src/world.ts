import { Entity } from './entity';
import { ComponentType } from "./components/types";
import {Health, Player, Position, Visual} from './components';
import { Pool } from './utilities/pool';
import { Query } from './query';

const MAX_CAPACITY = 200;

const entityPool = new Pool<Entity>(MAX_CAPACITY, Entity.create, Entity.reset);
const healthPool = new Pool<Health>(MAX_CAPACITY, Health.create, Health.reset);
const playerPool = new Pool<Player>(MAX_CAPACITY, Player.create, Player.reset);
const positionPool = new Pool<Position>(MAX_CAPACITY, Position.create, Position.reset);
const visualPool = new Pool<Visual>(MAX_CAPACITY, Visual.create, Visual.reset);

// Pre-allocate the max possible set of entities and components
resetEntities(MAX_CAPACITY);

export const query = new Query(entityPool);

export function resetEntities (capacity: i32): void {
    entityPool.reset(capacity);
    healthPool.reset(capacity);
    playerPool.reset(capacity);
    positionPool.reset(capacity);
    visualPool.reset(capacity);
}

export function allocateEntity (components: ComponentType): Entity {
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

