import { NextFunction, Request, Response } from "express";
import getModel from "../../models/leaderboard/factory"

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(await getModel().getAll());
    } catch (err) {
        next(err);
    }
}


export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {        
        res.json(await getModel().add(req.body));
    } catch (err) {
        next(err);
    }
}
