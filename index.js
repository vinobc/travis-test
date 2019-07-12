import express from 'express';
import mongodb from 'mongodb';
import config from './data';

const app = express();
const PORT = 4040;
const client = mongodb.MongoClient;

client.connect(config.DB, { useNewUrlParser: true }, (err, db) => { 
    if(err) {
        console.log('db is not connected')
    }
    else {
        console.log('db connected!!')
    }
});

app.get('/', (req, res) => {
    res.json("Hello Docker .. u r cool !!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});