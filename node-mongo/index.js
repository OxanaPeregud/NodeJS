const MongoClient = require('mongodb').MongoClient;
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    const dish1 = {name: "Dish1", description: "Desc1"};
    const dish2 = {name: "Dish2", description: "Desc2"};

    dboper.insertDocuments(db, [dish1, dish2], 'dishes')
        .then((result) => {
            console.log('Inserted first document id:\n', result.insertedIds[0]);
            return dboper.findDocuments(db, 'dishes');
        })
        .then((docs) => {
            console.log('Found documents:\n', docs);
            return dboper.updateDocument(db, {name: 'Dish1'}, {description: 'New Desc'}, 'dishes');
        })
        .then(() => {
            return dboper.findDocuments(db, 'dishes');
        })
        .then((docs) => {
            console.log('Found documents:\n', docs);
            return db.dropCollection('dishes');
        })
        .then((result) => {
            console.log('Dropped Collection: ', result);
            client.close();

        })
})
    .catch((err) => console.log(err));
