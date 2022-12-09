import * as w4 from "./wasm4";
import * as invaderImage from './image/invader';
import * as playerImage from './image/player';
import * as smileyImage from './image/smiley';
import * as tickImage from './image/tick';
import * as gamepad from './gamepad';
import * as boss from './image/boss';

export function update (): void {
    gamepad.update();
    tickImage.draw(0,0);

    invaderImage.draw(10, 10);
    playerImage.draw(0, 160 - playerImage.height - 1);
    smileyImage.draw(76, 76);
    playerImage.drawBullet(20, 80);
    invaderImage.drawBullet(20, 60);
    boss.draw(50, 50);

    store<u16>(w4.DRAW_COLORS, 0x002);
    if (gamepad.is & w4.BUTTON_1) {
        store<u16>(w4.DRAW_COLORS, 0x003);
    }
    w4.text("Press X to blink", 16, 90);
}

export function start (): void {
    store<u32>(w4.PALETTE, 0x000000, 0 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xffffff, 1 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0xff0000, 2 * sizeof<u32>());
    store<u32>(w4.PALETTE, 0x00ff00, 3 * sizeof<u32>());
}