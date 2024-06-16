import { Router } from "express";
import { add, getAll } from "../controllers/leaderboard/controller";
import validate from "../middlewares/input-validation";
import { addLeaderboardValidator } from "../controllers/leaderboard/validator";

const router = Router();
router.get('/', getAll)
router.post('/', validate(addLeaderboardValidator), add)

export default router;