const mongoose = require('mongoose');

const db =
  'mongodb://fishyjefft:Sheewen1997@ds141043.mlab.com:41043/omaewamoushindeiru';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongoose connected to mongodb');
  })
  .catch(error => {
    console.log('mongoose connection error :', error);
  });

//Title, Year, Genre, Actiors, Plot and poster
const schema = new mongoose.Schema({
  Title: { type: String },
  Year: { type: String },
  Genre: { type: String },
  Actors: { type: String },
  Plot: { type: String },
  Poster: { type: String }
});

const Data = mongoose.model('Data', schema, 'dataCollection');

module.exports = Movie;
