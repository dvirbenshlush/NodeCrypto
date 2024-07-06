import { DTO } from "./dto";
import { Model } from "./model";
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class MySQL implements Model {
    async signup(user: DTO): Promise<DTO> {
        const { githubId } = user;
        const result: OkPacketParams = await query ({
        sql: `
            INSERT INTO users
            (github_id)
            values
            (?)
        `, 
        values: [githubId]
    }) as OkPacketParams;


        return {
            id: result.insertId,
            ...user
        }
    }
    async login(user: DTO): Promise<DTO> {
        const { githubId } = user;
        const record = await query({ sql:`
            SELECT  id, github_id
            FROM    users
            WHERE   github_id = ?
        `, values: [githubId]}) as DTO[];
        return record[0];
    }
}

const mysql = new MySQL();
export default mysql;