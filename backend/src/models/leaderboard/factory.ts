import Model from "./model";
import leaderboard from "./mysql";

export default function getModel(): Model {
    return leaderboard;
}