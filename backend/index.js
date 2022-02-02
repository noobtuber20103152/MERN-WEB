const express = require("express")
var cors = require('cors')
const app = express();
const connectToMongo = require("./ConnectToMongo/ConnectToMongo")
const port = 5000
connectToMongo(); 
app.use(cors())
app.use(express.json())
app.use("/api/blog", require("./blog/Content"))
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}/`)
})