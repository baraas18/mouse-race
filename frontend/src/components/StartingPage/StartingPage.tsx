import './StartingPage.css';
import { useNavigate } from 'react-router-dom';

function StartingPage() {

    const navigate = useNavigate();

    return (
        <div className="StartingPage">
            <img src="startGame.png" className="StartGame" onClick={(e) => { navigate("/game") }} />
        </div>
    );
}

export default StartingPage;
