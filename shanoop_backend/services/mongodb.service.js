const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://shanoopthikkodi19_db_user:0ea34PHCJfuMONl0@shanoop-backend.cdnjpvr.mongodb.net/';

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