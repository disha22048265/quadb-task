const db = require("../db/connectToDb");
const axios = require("axios");

const fetchData = async () => {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = response.data;

    const values = Object.entries(data).slice(0,10).map(([key,value])=>[
        value.name,
        parseFloat(value.last),
        parseFloat(value.buy),
        parseFloat(value.sell),
        parseFloat(value.volume),
        value.base_unit
    ]);

    return values;
};

module.exports = {fetchData};
