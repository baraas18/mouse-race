import { useEffect, useState } from 'react';
import Stopwatch from '../StopWatch/StopWatch';
import './Game.css';
import '../StartingPage/StartingPage.css'
import { useNavigate } from 'react-router-dom';
import GameElementComponent from '../GameElementComponent/GameElementComponent';
import CollectElement from '../../models/CollectElement';
import AvoidElement from '../../models/AvoidElement';
import ChangeElement from '../../models/ChangeElement';
import { ElementColor, ElementType, GameElement } from '../../models/GameElement';
import Leaderboard from '../Leaderboard/Leaderboard';

function Game() {

    const navigate = useNavigate();

    const [time, setTime] = useState<number>(0);
    const [timer, setTimer] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const [gameElements, setGameElements] = useState<GameElement[]>([]);
    const [gameWon, setGameWon] = useState<boolean>(false);

    useEffect(() => {
        const amountOfElements = 30;
        let currentGameElements: GameElement[] = [];
        for (let i = 0; i < amountOfElements; i++) {
            let rand = Math.random();
            if (rand < (1 / 3)) {
                let collectElement = new CollectElement();
                collectElement.onClick = () => {
                    currentGameElements = currentGameElements.filter((element) => element !== collectElement);
                    setGameElements(currentGameElements);
                }
                currentGameElements.push(collectElement);
            } else if (rand < (2 / 3)) {
                let avoidElement = new AvoidElement();
                avoidElement.onClick = () => {
                    setIsRunning(false);
                }
                currentGameElements.push(avoidElement);
            } else {
                let changeElement = new ChangeElement();

                changeElement.onClick = () => {
                    if (changeElement.elementColor === ElementColor.RED) {
                        setIsRunning(false);
                    } else {
                        currentGameElements = currentGameElements.filter((element) => element !== changeElement);
                        setGameElements(currentGameElements);
                    }
                }

                currentGameElements.push(changeElement);
            }
        }
        setGameElements(currentGameElements);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            gameElements
                .filter((element) => element.elementType === ElementType.CHANGE)
                .map((changeElement) => changeElement.elementColor = changeElement.elementColor === ElementColor.GREEN ? ElementColor.RED : ElementColor.GREEN);
            setTimer(!timer);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [timer]);

    useEffect(() => {
        if (gameElements.some(element => element.elementType === ElementType.COLLECT || element.elementType === ElementType.CHANGE)) {
            setIsRunning(true);
        } else if (gameElements.length > 0) {
            setIsRunning(false);
            setGameWon(true);
        }
    }, [gameElements])

    useEffect(() => {
        if (!isRunning && !gameWon) {
            navigate("/gameOver");
        }
    }, [isRunning, gameWon])


    return (
        <>
            {isRunning &&
                <div className="Game">
                    <div className="Game-header">
                        <Stopwatch isRunning={isRunning} time={time} setTime={setTime} />
                    </div>
                    <div className="Game-body">
                        {gameElements.map((gameElement) => <GameElementComponent gameElement={gameElement} />)}
                    </div>
                </div>
            }
            {!isRunning && gameWon && <Leaderboard time={time} />}
        </>
    );
}

export default Game;
