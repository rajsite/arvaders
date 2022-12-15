import { Movement } from "../movement/movement";

export class Position {
    static create (): Position {
        return new Position();
    }
    static reset (position: Position): void {
        position.x = 0;
        position.y = 0;
        position.width = 0;
        position.height = 0;
        position.vx = 0;
        position.vy = 0;
        position.movement = null;
    }
    x: i32;
    y: i32;
    width: i32;
    height: i32;
    vx: i32;
    vy: i32;
    movement: Movement | null;
}
