var mongoose = require('mongoose')


const dbconnect = () => {
    mongoose.connect(process.env.DBURL).then((con) => {
        console.log('MongoDb connected to database:' + con.connection.host)
    })
}

module.exports = dbconnect