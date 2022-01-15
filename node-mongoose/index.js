const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then(() => {
    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Dish',
        description: 'Description of the Dish'
    })
        .then((dish) => {
            console.log(dish);

            return Dishes.findByIdAndUpdate(dish._id, {
                $set: {description: "Updated description"}
            }, {
                new: true
            }).exec();
        })
        .then((dish) => {
            console.log(dish);

            dish.comments.push({
                rating: 5,
                comment: "Dish comment",
                author: "Dish author"
            });

            return dish.save();

        })
        .then((dish) => {
            console.log(dish);
            return Dishes.deleteMany({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});
