import { GameElement, ElementType, ElementMovement, ElementColor, ElementShape } from "./GameElement";

class CollectElement implements GameElement {
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
        this.elementType = ElementType.COLLECT;
        this.elementMovement = ElementMovement.UPDOWN;
        this.elementInitialDirection = Math.random() > 0.5 ? -50 : 50;
        this.elementColor = ElementColor.GREEN;
        this.elementShape = ElementShape.RECTANGLE;
        this.elementSize = {
            width: (Math.random() + 0.25) * 100,
            height: (Math.random() + 0.25) * 100
        };
        this.elementAxis = {
            x: (Math.random() * 700) + 300,
            y: (Math.random() * 200) + 300
        };
        this.onClick = () => {
            alert("Collect clicked!");
        }
    }
}

export default CollectElement;
