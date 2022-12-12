export class Health {
    static new (): Health {
        return new Health();
    }
    static init (health: Health): void {
        health.health = 0;
    }
    health: i32;
}
