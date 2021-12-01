// const { Pool } = require('pg');
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'CodeJobs',
//     password: 'root'
// })




const { Pool } = require('pg');
const pool = new Pool({
    user: 'ztzduwft' ,
    host: 'tai.db.elephantsql.com',
    database: 'ztzduwft',
    password: 'X-1eOZ4pmh3MErt8HZlExzDJkTMkzjAa'
})

module.exports = pool