import express from 'express'
import { v4 as uuid } from 'uuid'
/* import mysql from 'mysql2/promise'
import mongoose from 'mongoose' */

const app = express();

/* const client = mysql.createPool({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: "admin"
})

const response = await client.query('select 1 + 1')
console.log(response)


const mongo_db = await mongoose.connect('mongodb://localhost:27017/test_mongo_docker')

console.log(mongo_db.connection.db.databaseName) */

app.get('/', (req, res) => {
    res.json({ id: uuid() })
})

app.listen(3000, () => {
    console.log('server on port 3000')
})