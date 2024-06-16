import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";


class Leaderboard implements Model {

    public async getAll(): Promise<DTO[]> {
        const leaderboard = await query(`
            SELECT  name,
                    time
            FROM    leaderboard
            ORDER BY time
            LIMIT 3
        `)
        return leaderboard;
    }

    public async add(dto: DTO): Promise<DTO[]> {        
        await query(
            `INSERT INTO leaderboard (name, time) VALUES (?, ?)`,
            [dto.name, dto.time]);
        return this.getAll()
    }

}

const leaderboard = new Leaderboard();
export default leaderboard;