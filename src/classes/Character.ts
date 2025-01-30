import type { CharacterProps } from "../types";
class Character {
    name: string;
    color: string;
    constructor(props: CharacterProps) {
        this.name = props.name
        this.color = props.color
    }
}
export default Character;