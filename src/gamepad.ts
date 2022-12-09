import * as w4 from "./wasm4";

export let was: u8;
export let is: u8 = load<u8>(w4.GAMEPAD1);

export function update (): void {
    is = load<u8>(w4.GAMEPAD1);
    const gamepadThisFrame = is & (is ^ was);
    was = is;
};
