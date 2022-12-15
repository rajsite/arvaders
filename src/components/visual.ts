import { Image } from "../images/image";

export class Visual {
    static create (): Visual {
        return new Visual();
    }
    static reset (visual: Visual): void {
        visual.image = null;
    }
    image: Image | null;
}
