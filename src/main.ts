import { tick} from './utilities/tick';
import * as gamepad from './utilities/gamepad';
import { runScene } from './runner';

export function update (): void {
    gamepad.update();
    tick(0,0);
    runScene();
}
