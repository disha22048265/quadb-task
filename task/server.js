const express = require("express");
const cryptoRoutes = require("./routes/cryptoRoutes");
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use("/api",cryptoRoutes);



app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})