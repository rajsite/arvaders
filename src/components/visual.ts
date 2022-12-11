import { Image } from "../image/image";

export class Visual {
    static init (visual: Visual): void {
        visual.image = null;
    }

    image: Image | null;
}
