const express = require("express");
const { fetchData } = require("../controllers/cryptoDataController");
const { insertIntoTable, fetchDataFromTable } = require("../controllers/tableController");

const router = express.Router();

router.post('/fetch-insert', async(req,res) =>{
    try{
        const data = await fetchData();
        const response = await insertIntoTable(data);
        res.status(200).send("Data inserted successfully into the table");
    }
    catch(error)
    {
        res.status(500).send("Error inserting data : ",error);
    }
});

module.exports = router;

router.get('/latest-data', async (req,res) => {
   try {
        const data = await fetchDataFromTable();
        res.status(200).send(data);
   } catch (error) {
        console.log("Error fetching data from database  : ",error);
        res.status(500).send("Couldn't fetch the data from database");
   } 
});