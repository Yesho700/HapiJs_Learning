import { Pool } from 'pg';


const pool = Pool({
    user: 'app_user',
    host: 'localhost',
    database: 'hapiDb',
    password: 'app_user',
    port: 5432
});


export default pool;