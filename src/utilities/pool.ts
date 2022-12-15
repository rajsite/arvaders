export class Pool<T> {
    instances: (T|null)[];
    capacity: i32 = 0;
    allocated: i32 = 0;
    constructor (
        public readonly MAX_CAPACITY: i32,
        private readonly allocator: () => T,
        private readonly resetter: (obj: T) => void
    ) {
        this.instances = new Array(MAX_CAPACITY);
    }
    reset (capacity: i32): void {
        // todo check capacity against max capacity
        this.capacity = capacity;
        this.allocated = 0;
        for (let i = 0; i < this.capacity; i++){
            if (this.instances[i]) {
                this.resetter(this.instances[i]!);
            } else {
                this.instances[i] = this.allocator();
            }
        }
    }
    allocate (): T {
        // todo check allocated against capacity
        const nextIndex = this.allocated;
        this.allocated++;
        const entity = this.instances[nextIndex]!;
        return entity;
    }
}
