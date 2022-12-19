export class Attack {
    static create (): Attack {
        return new Attack();
    }
    static reset (attack: Attack): void {
        attack.attackInterval = 0;
        attack.lastAttack = 0;
    }
    attackInterval: i32 = 0;
    lastAttack: i32 = 0;
}
