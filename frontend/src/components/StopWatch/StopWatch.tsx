import { useEffect } from "react";
import "./StopWatch.css";

interface StopwatchProps {
    isRunning: boolean;
    time: number;
    setTime: (time: number) => void;
}

const Stopwatch = (props: StopwatchProps) => {

    useEffect(() => {
        let intervalId: NodeJS.Timer;
        if (props.isRunning) {
            intervalId = setInterval(() => props.setTime(props.time + 1), 1000);
        }
        return () => clearInterval(intervalId);
    }, [props.isRunning, props.time]);

    const hours = Math.floor(props.time / 3600);

    const minutes = Math.floor((props.time % 3600) / 60);

    const seconds = Math.floor(props.time % 60);



    return (
        <p className="stopwatch-time">
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
        </p>
    );
};

export default Stopwatch;