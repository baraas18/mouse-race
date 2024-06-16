export interface GameElement {
    elementType: ElementType;
    elementMovement: ElementMovement;
    elementInitialDirection: number;
    elementColor: ElementColor;
    elementShape: ElementShape;
    elementSize: {
        width: number;
        height: number
    };
    elementAxis: {
        x: number;
        y: number
    };
    onClick: () => void
    
}

export enum ElementType {
    COLLECT = "COLLECT",
    CHANGE = "CHANGE",
    AVOID = "AVOID"
}

export enum ElementMovement {
    UPDOWN = "UPDOWN",
    LEFTRIGHT = "LEFTRIGHT",
    CLOCKWISE = "CLOCKWISE"
}

export enum ElementColor {
    GREEN = "GREEN",
    RED = "RED"
}

export enum ElementShape {
    RECTANGLE = "RECTANGLE",
    CIRCLE = "CIRCLE",
    SQUARE = "SQUARE"
}
