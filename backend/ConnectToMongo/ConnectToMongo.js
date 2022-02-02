const mongoose = require('mongoose')
const mongouri = "mongodb://localhost:27017/blog?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongouri, () => {
        console.log("Connected to mongo successfullly")
    })
}
module.exports = connectToMongo;