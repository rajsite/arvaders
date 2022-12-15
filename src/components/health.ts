export class Health {
    static create (): Health {
        return new Health();
    }
    static reset (health: Health): void {
        health.health = 0;
    }
    health: i32;
}
