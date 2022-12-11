import { Image } from "../images/image";

export class Visual {
    static init (visual: Visual): void {
        visual.image = null;
    }

    image: Image | null;
}
