import { Entity } from "./entity";
import { ComponentType } from "./components/types";
import { Pool } from "./utilities/pool";

export class Query {
    matches: Entity[];
    count: i32 = 0;
    constructor (
        private readonly entityPool: Pool<Entity>
    ) {
        this.matches = new Array(entityPool.MAX_CAPACITY);
    }

    entitiesWith (
        components: ComponentType
    ): void {
        const entityPool = this.entityPool;
        const matches = this.matches;

        this.count = 0;
        for (let i = 0; i < entityPool.allocated; i++) {
            const entity = entityPool.instances[i]!;
            if (
                entity.exists
                && (entity.components & components) === components
            ) {
                matches[this.count] = entity;
                this.count++;
            }
        }
    }

    astralEntitiesWith (
        components: ComponentType
    ): void {
        const entityPool = this.entityPool;
        const matches = this.matches;

        this.count = 0;
        for (let i = 0; i < entityPool.allocated; i++) {
            const entity = entityPool.instances[i]!;
            if (
                !entity.exists
                && (entity.components & components) === components
            ) {
                matches[this.count] = entity;
                this.count++;
            }
        }
    }
}
