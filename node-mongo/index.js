const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    dboper.insertDocument(db, {name: "Dish", description: "New Dish"}, 'dishes', (result) => {

        console.log('Inserted document id:\n', result.insertedId);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found documents:\n', docs);

            dboper.updateDocument(db, {name: "Dish"}, {description: "Updated Dish"}, 'dishes', (result) => {
                console.log('Document has been updated:\n', result.acknowledged);

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found documents:\n', docs);

                    db.dropCollection('dishes', (result) => {
                        console.log('Dropped Collection: ', result);
                        client.close();
                    });
                });
            });
        });
    });
});
