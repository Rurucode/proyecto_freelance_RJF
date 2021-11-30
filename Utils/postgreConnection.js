const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CodeJobs',
    password: 'root'
})

module.exports = pool