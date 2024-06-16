import Joi from "joi"
import DTO from "../../models/leaderboard/dto"

export const addLeaderboardValidator = Joi.object<DTO>({
    name: Joi.string().min(3).required(),
    time: Joi.number().required()
});
