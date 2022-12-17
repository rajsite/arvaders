export class Health {
    static create (): Health {
        return new Health();
    }
    static reset (health: Health): void {
        health.value = 0;
    }
    value: i32;
}
