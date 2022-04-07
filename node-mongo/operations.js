exports.insertDocuments = (db, documents, collection) => {
    const coll = db.collection(collection);
    return coll.insertMany(documents);
};

exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteMany(document);
};

exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, {$set: update});
};
