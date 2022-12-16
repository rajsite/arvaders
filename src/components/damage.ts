export class Damage {
    static create (): Damage {
        return new Damage();
    }
    static reset (damage: Damage): void {
        damage.damage = 0;
    }
    damage: i32;
}
