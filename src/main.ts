import * as w4 from "./wasm4";
import * as tickImage from './images/tick';
import * as gamepad from './gamepad';
import { run } from './scene';

export function update (): void {
    gamepad.update();
    tickImage.draw(0,0);

    run();

    store<u16>(w4.DRAW_COLORS, 0x002);
    if (gamepad.is & w4.BUTTON_1) {
        store<u16>(w4.DRAW_COLORS, 0x003);
    }
    w4.text("Press X to blink", 16, 90);
}
