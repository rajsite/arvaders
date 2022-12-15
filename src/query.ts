import { ComponentType, Entity } from "./components/entity";
import { Pool } from "./utilities/pool";

export class Query {
    matches: Entity[];
    count: i32 = 0;
    constructor (
        private readonly entityPool: Pool<Entity>
    ) {
        this.matches = new Array(entityPool.MAX_CAPACITY);
    }

    entitiesAll(): void {
        const entityPool = this.entityPool;
        const matches = this.matches;

        this.count = entityPool.allocated;
        for (let i = 0; i < entityPool.allocated; i++) {
            matches[i] = entityPool.instances[i]!;
        }
    }

    entitiesWith (components: ComponentType): void {
        const entityPool = this.entityPool;
        const matches = this.matches;

        this.count = 0;
        for (let i = 0; i < entityPool.allocated; i++) {
            const entity = entityPool.instances[i]!;
            if ((entity.components & components) === components) {
                matches[this.count] = entity;
                this.count++;
            }
        }
    }
}
