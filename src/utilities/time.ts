// @ts-expect-error checking global TIME_SCALE
const timeScale = isDefined(TIME_SCALE) ? TIME_SCALE : 1;

export const scaleTime = (time: i32): i32 => time / timeScale;
export const scaleVelocity = (velocity: i32): i32 => velocity * timeScale;
