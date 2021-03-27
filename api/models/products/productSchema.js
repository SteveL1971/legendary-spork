const mongodb = require('mongoose');

const funkopopSchema = mongodb.Schema({

  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, },
  series: { type: String, required: true },
  number: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },

  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }

})

module.exports = mongodb.model('Funkopop', funkopopSchema);