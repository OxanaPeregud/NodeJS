const MongoClient = require('mongodb').MongoClient;
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    dboper.insertDocument(db, {name: "Dish", description: "New Dish"}, 'dishes')
        .then((result) => {
            console.log('Inserted document id:\n', result.insertedId);
            return dboper.findDocuments(db, 'dishes')
        })
        .then((docs) => {
            console.log('Found documents:\n', docs);
            return db.dropCollection('dishes')
        })
        .then((result) => {
            console.log('Dropped Collection: ', result);
            client.close();

        })
        .catch((err) => console.log(err));
})
    .catch((err) => console.log(err));
