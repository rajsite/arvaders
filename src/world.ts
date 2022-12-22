import { Entity } from './entity';
import { ComponentType } from "./components/types";
import {Damage, Health, Position, Visual} from './components';
import { Pool } from './utilities/pool';
import { Query } from './query';
import { Attack } from './components/attack';

const MAX_CAPACITY = 150;

const entityPool = new Pool<Entity>(MAX_CAPACITY, Entity.create, Entity.reset);
const attackPool = new Pool<Attack>(MAX_CAPACITY, Attack.create, Attack.reset);
const damagePool = new Pool<Damage>(MAX_CAPACITY, Damage.create, Damage.reset);
const healthPool = new Pool<Health>(MAX_CAPACITY, Health.create, Health.reset);
const positionPool = new Pool<Position>(MAX_CAPACITY, Position.create, Position.reset);
const visualPool = new Pool<Visual>(MAX_CAPACITY, Visual.create, Visual.reset);

// Pre-allocate the max possible set of entities and components
resetEntities(MAX_CAPACITY);
resetEntities(0);

export const query = new Query(entityPool);
export const query2 = new Query(entityPool);

export function resetEntities (capacity: i32): void {
    entityPool.reset(capacity);
    attackPool.reset(capacity);
    damagePool.reset(capacity);
    healthPool.reset(capacity);
    positionPool.reset(capacity);
    visualPool.reset(capacity);
}

export function allocateEntity (components: ComponentType): Entity {
    const entity = entityPool.allocate();
    entity.components = components;

    if (components & ComponentType.attack) {
        entity.attack = attackPool.allocate();
    }

    if (components & ComponentType.damage) {
        entity.damage = damagePool.allocate();
    }

    if (components & ComponentType.health) {
        entity.health = healthPool.allocate();
    }

    if (components & ComponentType.position) {
        entity.position = positionPool.allocate();
    }

    if (components & ComponentType.visual) {
        entity.visual = visualPool.allocate();
    }

    return entity;
}

export function firstEntityWith (
    components: ComponentType
): Entity | null {
    for (let i = 0; i < entityPool.allocated; i++) {
        const entity = entityPool.instances[i]!;
        if (
            entity.exists
            && (entity.components & components) === components
        ) {
            return entity;
        }
    }
    return null;
}

export function firstAstralEntityWith (
    components: ComponentType
): Entity | null {
    for (let i = 0; i < entityPool.allocated; i++) {
        const entity = entityPool.instances[i]!;
        if (
            !entity.exists
            && (entity.components & components) === components
        ) {
            return entity;
        }
    }
    return null;
}
