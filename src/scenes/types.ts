export abstract class Scene {
    constructor(
        public readonly name: string,
        public readonly renders: boolean
    ) {}

    abstract run (): Scene;
}
