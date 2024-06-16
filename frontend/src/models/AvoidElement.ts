import { GameElement, ElementType, ElementMovement, ElementColor, ElementShape } from "./GameElement";

class AvoidElement implements GameElement {
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
        this.elementType = ElementType.AVOID;
        this.elementMovement = ElementMovement.LEFTRIGHT;
        this.elementInitialDirection = Math.random() > 0.5 ? 50 : -50;
        this.elementColor = ElementColor.RED;
        this.elementShape = ElementShape.CIRCLE;
        let randSize = (Math.random() + 0.25) * 100;
        this.elementSize = {
            width: randSize,
            height: randSize
        };
        this.elementAxis = {
            x: (Math.random() * 700) + 300,
            y: (Math.random() * 200) + 300
        };
        this.onClick = () => {
            alert("Avoid clicked!");
        }
    }
}

export default AvoidElement;
