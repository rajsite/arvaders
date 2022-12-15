import { Image } from "../images/types";

export class Visual {
    static create (): Visual {
        return new Visual();
    }
    static reset (visual: Visual): void {
        visual.image = null;
    }
    image: Image | null;
}
