import { Routes, Route, Navigate } from 'react-router-dom';
import StartingPage from '../StartingPage/StartingPage';
import Game from '../Game/Game';
import Page404 from '../Page404/Page404';
import GameOver from '../GameOver/GameOver';



function Routing(): JSX.Element {


    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gameOver" element={<GameOver />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
