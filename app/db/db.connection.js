
const { connect, connection } = require('mongoose');
require('dotenv').config();

async function dbInstance() {
    const uri = process.env.DB_URI;
    connect(uri, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connection established succefully to MongoDB');
    }).catch(error => console.error('Mongoose DB Error', error.message));

    connection.on('connected', () => {
        console.log('Mongoose connected to DB');
    })

    connection.on('error', (error) => {
        console.log('Mongoose Error', error);
    })
    connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    })
}
module.exports = { dbInstance };


