import mysql from "../db/db.js"
import Query from "../sql/document/index.js";

const GetTest = async () => {
    let connection;
    try {
        console.log("-- START : connection --");
        connection = await mysql.getConnection();


        const result = await connection.execute(
            Query.TEST
        )

        return result[0];

        if (!result.rows?.length) {
            return [];
        }

        const data = result.rows
        return data;
    }
    catch (e) {
        throw e;
    }
}

export default {
    GetTest
}