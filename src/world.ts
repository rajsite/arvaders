import { Health } from "./components/health";
import { Player } from "./components/player";
import { Position } from "./components/position";
import { Visual } from "./components/visual";
import { Entity } from "./entity";

const capacity = 50;

export enum ComponentType {
    health = 1,
    player = 2,
    position = 4,
    visual = 8
}

class Pool {
    entity: Entity[] = new Array(capacity);
    health: Health[] = new Array(capacity);
    player: Player[] = new Array(capacity);
    position: Position[] = new Array(capacity);
    visual: Visual[] = new Array(capacity);
}
export const pool = new Pool();

for (let i = 0; i < capacity; i++ ){
    pool.entity[i] = new Entity();
    pool.health[i] = new Health();
    pool.player[i] = new Player();
    pool.position[i] = new Position();
    pool.visual[i] = new Visual();
}

// World state
let entitiesCount = 0;
let freeIndex = 0

export function resetEntities (count: i32): void {
    entitiesCount = count;
    freeIndex = 0;
    for (let i = 0; i < entitiesCount; i++) {
        const entity = pool.entity[i];
        Entity.init(entity);
    }
}

export function allocateEntity (components: i32): Entity {
    const index = freeIndex;
    freeIndex++;

    const entity = pool.entity[index]
    if (components & ComponentType.health) {
        entity.health = pool.health[index];
        Health.init(entity.health!);
    }

    if (components & ComponentType.player) {
        entity.player = pool.player[index];
        Player.init(entity.player!);
    }

    if (components & ComponentType.position) {
        entity.position = pool.position[index];
        Position.init(entity.position!);
    }

    if (components & ComponentType.visual) {
        entity.visual = pool.visual[index];
        Visual.init(entity.visual!);
    }

    return entity;
}

class Matches {
    entities: Entity[] = new Array(capacity);
    count: i32 = 0;
}
export const matches = new Matches();

export function allEntities(): void {
    matches.count = freeIndex;
    for (let i = 0; i < matches.count; i++) {
        matches.entities[i] = pool.entity[i];
    }
}
