const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/';

class MongoDB {
    static connectToMongoDB = () =>{
            MongoClient.connect(url).then(
                (connection)=> {
                    console.log(" MongoDB connected");
                    this.db = connection.db('shanoop_db')
                }
            ).catch((err) => console.log("not connected"));
    };
}

MongoDB.db = null;


module.exports = MongoDB;