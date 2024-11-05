const db = require("../db/connectToDb");

const createTable = async (req,res) => {
    const query = `
        CREATE TABLE IF NOT EXISTS task (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        last DECIMAL,
        buy DECIMAL,
        sell DECIMAL,
        volume DECIMAL,
        base_unit VARCHAR(10)
    );`;
    try {
        await db.query(query);
        res.status(200).send("Table created successfully")
    } 
    catch (error) {
        console.log("Error creating table or table exists.")
        console.log(error.message);
    }
}

const insertIntoTable = async (values) => {
    await createTable();
    const query =  `INSERT INTO task (name,last,buy,sell,volume,base_unit)
        VALUES ($1,$2,$3,$4,$5,$6)`;
    
        console.log("Inserting into table");
        console.log(values);

    try {
        for(const row of values)            
        {
            console.log("Row is : ");
            console.log(row);
            await db.query(query,row);
        }                
    } 
    catch (error) {
        console.log(`Error inserting data into table : ${error}`);
    }
        
};


const fetchDataFromTable = async(req, res) => {
    try {
        const readquery = `SELECT * from task ORDER BY id DESC LIMIT 10`;
        const result = await db.query(readquery);
        console.log("Result fetched : ",result.rows);
        return result.rows;
    } catch (error) {
        console.log("Couldn't fetch the data from the database");
        console.log(error)
    }
}

module.exports = {createTable, insertIntoTable, fetchDataFromTable }