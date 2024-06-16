import './GameElementComponent.css';
import { GameElement } from '../../models/GameElement';

interface ElementComponentProps {
    gameElement: GameElement;
}

function GameElementComponent(props: ElementComponentProps) {

    return (
        <div
            className={props.gameElement.elementType}
            style={{
                width: `${props.gameElement.elementSize?.width}px`,
                height: `${props.gameElement.elementSize?.height}px`,
                "--fromTop": `${props.gameElement.elementAxis?.y}px`,
                "--toTop": `${props.gameElement.elementAxis?.y + props.gameElement.elementInitialDirection}px`,
                "--fromLeft": `${props.gameElement.elementAxis?.x}px`,
                "--toLeft": `${props.gameElement.elementAxis?.x - props.gameElement.elementInitialDirection}px`,
                "--color": props.gameElement.elementColor
            } as React.CSSProperties}
            onClick={(e) => props.gameElement.onClick()}
        >
        </div>
    );
}

export default GameElementComponent;
