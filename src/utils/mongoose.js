//connection to the database
//connection, from mongoose is to know what's happened in the connection, like a error or it's ok. 
import {connect, connection} from 'mongoose';

const conn = {
    //Starting the connection, the connection is false
    isConnected: false
}

export async function dbConnect(){

    //If the connection exists, return
    if(conn.isConnected) return;

    //Object from database
    const db = await connect(process.env.MONGODB_URL);
    //If the object exists, return a state
    //The connection is save in the const conn
    conn.isConnected = db.connections[0].readyState

    //console.log(db.connection.db.databaseName)
}

//Mongoose connection events

//When the connection was successful
connection.on("connected", () => {
    console.log("Mongodb is connected");
})

//When the connection had an error
connection.on("error", (err) => {
    console.log(err);
})