import './Leaderboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import appConfig from "../../utils/AppConfig";
import notify from '../../services/Notify';

interface LeaderboardProps {
    time: number;
}

interface Score {
    name: string;
    time: number;
}

const Leaderboard = (props: LeaderboardProps) => {
    const [scores, setScores] = useState<Score[]>([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        const response = await axios.get(appConfig.leaderboardUrl);
        setScores(response.data);
    };

    const handleSubmit = async (time: number) => {
        try {
            const response = await axios.post(appConfig.leaderboardUrl, { 'name': name, 'time': time });
            notify.success('Your time has been added successfully!');
            setScores(response.data);
        } catch (err) {
            notify.error(err);
        }
    };
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>{score.name}: {score.time}s</li>
                ))}
            </ul>
            {props.time !== null && (
            
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <button onClick={() => handleSubmit(props.time)}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Leaderboard;
