import { query, query2 } from "../world";
import { ComponentType } from "../components/types";

export function damage(): void {
    const damageEntities = query;
    const hurtEntities = query2;

    damageEntities.entitiesWith(
        ComponentType.damage | ComponentType.position
    );
    hurtEntities.entitiesWith(
        ComponentType.health | ComponentType.position
    );

    for (let i = 0; i < damageEntities.count; i++) {
        const damageEntity = damageEntities.matches[i];
        for (let j = 0; j < hurtEntities.count; j++) {
            const hurtEntity = hurtEntities.matches[j];
            if (
                (
                    (damageEntity.components & ComponentType.player) === (hurtEntity.components & ComponentType.enemy)
                    || (damageEntity.components & ComponentType.enemy) === (hurtEntity.components & ComponentType.player)
                )
                && damageEntity.position!.intersects(hurtEntity.position!)
            ) {
                hurtEntity.health!.value -= damageEntity.damage!.value;

                if (hurtEntity.health!.value <= 0) {
                    hurtEntity.exists = false;
                }

                // Damage like a bee, sting once and gone
                damageEntity.exists = false;
                break;
            }
        }
    }
}
