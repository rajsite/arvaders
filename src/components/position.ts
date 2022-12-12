export class Position {
    static new (): Position {
        return new Position();
    }
    static init (position: Position): void {
        position.x = 0;
        position.y = 0;
        position.width = 0;
        position.height = 0;
        position.vx = 0;
        position.vy = 0;
    }
    x: i32;
    y: i32;
    width: i32;
    height: i32;
    vx: i32;
    vy: i32;
}
