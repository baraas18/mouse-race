import { GameElement, ElementType, ElementMovement, ElementColor, ElementShape } from "./GameElement";

class ChangeElement implements GameElement {
    public elementType: ElementType;
    public elementMovement: ElementMovement;
    public elementInitialDirection: number;
    public elementColor: ElementColor;
    public elementShape: ElementShape;
    public elementSize: {
        width: number;
        height: number
    };
    public elementAxis: {
        x: number;
        y: number;
    };
    public onClick: () => void;

    constructor() {
        this.elementType = ElementType.CHANGE;
        this.elementMovement = ElementMovement.CLOCKWISE;
        this.elementInitialDirection = 50;
        this.elementColor = Math.random() > 0.5 ? ElementColor.GREEN : ElementColor.RED;
        this.elementShape = ElementShape.SQUARE;
        let rand = (Math.random() + 0.25) * 100;
        this.elementSize = {
            width: rand,
            height: rand
        };
        this.elementAxis = {
            x: (Math.random() * 700) + 300,
            y: (Math.random() * 200) + 300
        };
        this.onClick = () => {
            window.alert("Change clicked!");
        }
    }
}

export default ChangeElement;
