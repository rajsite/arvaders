import * as w4 from "../wasm4";

let was: u8;
export let justPressed: u8;
export let is: u8 = load<u8>(w4.GAMEPAD1);

export function update (): void {
    is = load<u8>(w4.GAMEPAD1);
    justPressed = is & (is ^ was);
    was = is;
};
