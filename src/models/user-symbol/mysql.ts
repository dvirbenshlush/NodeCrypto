import { DTO } from "./dto";
import { Model } from "./model";
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class MySQL implements Model {

    async getDistinctSymbols(): Promise<{ symbol: string; }[]> {
        const symbols = await query({sql:`
            SELECT DISTINCT symbol from users_symbols
        `}) as DTO[];
        return symbols;
    }
    async getForUser(userId: number): Promise<DTO[]> {
        const userSymbols = await query({
            sql:`
            SELECT  id, user_id, symbol
            FROM    users_symbols
            WHERE   user_id = ?
        `,
        values: [userId]
    }) as DTO[];
        return userSymbols;
    }

    async add(userSymbol: DTO): Promise<DTO> {
        const { userId, symbol } = userSymbol;
        const result = await query({
            sql: `
                INSERT INTO users_symbols
                (user_id, symbol)
                values
                (?, ?)
            `,
            values: [userId, symbol]
        }) as OkPacketParams;
        return {
            id: result.insertId,
            ...userSymbol
        };
    }
}

const mysql = new MySQL();
export default mysql;