const {Client} = require("pg");

require('dotenv').config();

const client = new Client({
    connectionString : process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    }    
});


client.connect()
    .then(()=>{console.log("Connected to PostgreSQL Database.")})
    .catch((err)=>{console.log(`Error connecting to database ${err}`),err});

module.exports = client;