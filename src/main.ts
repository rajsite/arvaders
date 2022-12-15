import * as w4 from "./wasm4";
import { tick} from './utilities/tick';
import * as gamepad from './gamepad';
import { run } from './scenes/runner';

export function update (): void {
    gamepad.update();
    tick(0,0);

    run();

    store<u16>(w4.DRAW_COLORS, 0x002);
    if (gamepad.is & w4.BUTTON_1) {
        store<u16>(w4.DRAW_COLORS, 0x003);
    }
    w4.text("Press X to blink", 16, 90);
}
