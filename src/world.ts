import { Health } from "./components/health";
import { Player } from "./components/player";
import { Position } from "./components/position";
import { Visual } from "./components/visual";
import { Entity } from "./components/entity";

const poolCapacity = 150;

export enum ComponentType {
    health = 1,
    player = 2,
    position = 4,
    visual = 8
}

class Pool {
    entity: Entity[] = new Array(poolCapacity);
    health: Health[] = new Array(poolCapacity);
    player: Player[] = new Array(poolCapacity);
    position: Position[] = new Array(poolCapacity);
    visual: Visual[] = new Array(poolCapacity);
}
export const pool = new Pool();

for (let i = 0; i < poolCapacity; i++ ){
    pool.entity[i] = new Entity();
    pool.health[i] = new Health();
    pool.player[i] = new Player();
    pool.position[i] = new Position();
    pool.visual[i] = new Visual();
}

// World state
let entitiesCapacity = 0;
let entitiesAllocated = 0

export function resetEntities (capacity: i32): void {
    entitiesCapacity = capacity;
    entitiesAllocated = 0;
    for (let i = 0; i < entitiesCapacity; i++) {
        const entity = pool.entity[i];
        Entity.init(entity);
    }
}

export function allocateEntity (components: i32): Entity {
    const nextIndex = entitiesAllocated;
    entitiesAllocated++;

    const entity = pool.entity[nextIndex];
    entity.components = components;
    if (components & ComponentType.health) {
        entity.health = pool.health[nextIndex];
        Health.init(entity.health!);
    }

    if (components & ComponentType.player) {
        entity.player = pool.player[nextIndex];
        Player.init(entity.player!);
    }

    if (components & ComponentType.position) {
        entity.position = pool.position[nextIndex];
        Position.init(entity.position!);
    }

    if (components & ComponentType.visual) {
        entity.visual = pool.visual[nextIndex];
        Visual.init(entity.visual!);
    }

    return entity;
}

class Matches {
    entities: Entity[] = new Array(poolCapacity);
    count: i32 = 0;
}
export const matches = new Matches();

export function entitiesAll(): void {
    matches.count = entitiesAllocated;
    for (let i = 0; i < entitiesAllocated; i++) {
        matches.entities[i] = pool.entity[i];
    }
}

export function entitiesWith (components: i32): void {
    matches.count = 0;
    for (let i = 0; i < entitiesAllocated; i++) {
        const entity = pool.entity[i];
        if ((entity.components & components) === components) {
            matches.entities[matches.count] = entity;
            matches.count++;
        }
    }
}
