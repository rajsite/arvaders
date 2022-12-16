export class Damage {
    static create (): Damage {
        return new Damage();
    }
    static reset (damage: Damage): void {
        damage.value = 0;
    }
    value: i32;
}
