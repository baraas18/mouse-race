process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';

import express from "express";
import leaderboardRouter from './routers/leaderboard';
import { errorHandler } from "./middlewares/error-handler";
import expressFileUpload from 'express-fileupload';

import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
server.use(expressFileUpload())

server.use('/api/leaderboard', leaderboardRouter)

server.use(errorHandler)

export default server;
