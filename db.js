const Pool = require("pg").Pool;

const pool = new Pool({
    user: "riolosrzjbhdxa",
    database: "d5ojq5fg16io3j",
    host: "ec2-54-198-73-79.compute-1.amazonaws.com",
    port: 5432,
    password: "b37ac7ad7e6047f9c7a5fa1f8bb200761989d11c934c1ac0716907e34ed71efd",
    ssl: { rejectUnauthorized: false }
 
});

module.exports = pool;
