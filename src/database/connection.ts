import { createPool, Pool } from 'mysql2/promise';

export const connect = async (): Promise<Pool> => {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Eleuterio@2022',
        database: 'eshop_online',
        connectionLimit: 10
    });

    return connection;

}