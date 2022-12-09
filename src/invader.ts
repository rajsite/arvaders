import * as invaderImage from './image/invader';

export class Invader {
    static count: i32;
    static invaders: Invader[] = new Array(20);
    static draw(): void {
        for (let i = 0; i < Invader.count; i ++) {
            invaderImage.draw(
                Invader.invaders[i].x,
                Invader.invaders[i].y
            );
        }
    }

    health: i32;
    x: i32;
    y: i32;

    isAlive(): boolean {
        return this.health > 0;
    }
}

for (let i = 0; i < Invader.invaders.length; i++) {
    Invader.invaders[i] = new Invader();
}
