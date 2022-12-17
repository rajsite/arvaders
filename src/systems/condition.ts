import { firstEntityWith } from "../world";
import { ComponentType } from "../components/types";

export enum Condition {
    playing,
    win,
    lose
};

export function condition(): Condition {
    if(firstEntityWith(
        ComponentType.enemy
        | ComponentType.ship
    ) === null) {
        return Condition.win;
    }
    if(firstEntityWith(
        ComponentType.player
        | ComponentType.ship
    ) === null) {
        return Condition.lose;
    }
    return Condition.playing;
}
