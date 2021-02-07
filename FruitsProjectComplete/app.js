const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    //ensures a name is provided
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    //ensures ratings are specific
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Melon",
//   rating: 10,
//   review: "So hydrating!"
// });
const pineapple = new Fruit({
name: "Pineapple",
rating: 8,
review: "Zangy"
});

//pineapple.save();

const mango = new Fruit ({
  name: "Mango",
  rating: 10,
  review: "So frickin TASTY!"
});
mango.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

Person.updateOne({name:"Amy"}, {favouriteFruit: pineapple}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Document updated successfully.")
  }
});

//person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 1,
//   review: "Allergic"
// });
//
// const avocado = new Fruit({
//   name: "Avocado",
//   rating: 9,
//   review: "The best fruit but very expensive"
// });
//
// const apple = new Fruit({
//   name: "Apple",
//   rating: 5,
//   review: "Okay but not great"
// });

// Fruit.insertMany([kiwi, avocado, apple], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //good practice to close connection when done
    mongoose.connection.close();
    //using forEach to loop through array Fruits and log names of fruits only
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "ID NAME"}, {name: "Potato"}, function(err, fruits){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function (err){
//   if (err) {
//     console.log(err);
//   } else {
//     conole.log("Successfully deleted the document");
//   }
// });

Person.deleteMany({name:"John"}, function(err){
  if (err) {
    console.log(err);
  }else{
    console.log("Successfully deleted the document");
  }
});
