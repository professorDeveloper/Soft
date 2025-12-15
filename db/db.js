const {Pool} = require('pg');
const pool = new Pool({
    host: 'dpg-d4vril8gjchc73d2j8k0-a.oregon-postgres.render.com',
    database: 'soft_jo7d',
    user: 'soft_jo7d_user',
    password: 'ZoOnsxkfVrjKcLZ6VVbZ7lEF6t1H39IR',
    port: 5432,
    max: 10,
    ssl: {
        rejectUnauthorized: false
    },
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});
pool.connect().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});
module.exports = pool