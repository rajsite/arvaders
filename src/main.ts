import * as w4 from "./wasm4";
import * as invaderImage from './image/invader';
import * as playerImage from './image/player';
import * as smileyImage from './image/smiley';
import * as tickImage from './image/tick';
import * as gamepad from './gamepad';
import * as boss from './image/boss';
import * as bullet from './image/bullet';
import { BulletType } from "./image/bullet";

import { Invader } from "./invader";

export function update (): void {
    gamepad.update();
    tickImage.draw(0,0);

    playerImage.draw(0, 160 - playerImage.height - 1);
    smileyImage.draw(76, 76);
    bullet.draw(20, 80, BulletType.player);
    bullet.draw(20, 60, BulletType.enemy);
    boss.draw(50, 50);
    Invader.draw();

    store<u16>(w4.DRAW_COLORS, 0x002);
    if (gamepad.is & w4.BUTTON_1) {
        store<u16>(w4.DRAW_COLORS, 0x003);
    }
    w4.text("Press X to blink", 16, 90);
}

export function start (): void {
    Invader.count = 4;
    for (let i =0; i< Invader.count; i++) {
        Invader.invaders[i].x = i * invaderImage.width + 4 * i;
    }
    store<u32>(w4.PALETTE, 0x000000, 0 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xffffff, 1 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xff0000, 2 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0x00ff00, 3 * sizeof<u32>());
}
