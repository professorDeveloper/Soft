const {Pool} = require('pg');
const pool = new Pool({
    connectionString: "postgresql://soft_jo7d_user:ZoOnsxkfVrjKcLZ6VVbZ7lEF6t1H39IR@dpg-d4vril8gjchc73d2j8k0-a.oregon-postgres.render.com/soft_jo7d",
    ssl: {
        rejectUnauthorized: true
    },
});
pool.connect().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});
module.exports = pool