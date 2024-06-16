import './GameOver.css';
import { useNavigate } from 'react-router-dom';

function GameOver() {

    const navigate = useNavigate();

    return (
        <div className="GameOver">
            <img src="tryagain.png" className="Game" onClick={(e) => { navigate("/game") }} />
        </div>
    );
}

export default GameOver;
