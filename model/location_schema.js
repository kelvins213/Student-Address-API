const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
    country: {
        type: String,
        require: true,
    },

    state: {
        type: String,
        require: true,
    },

    city: {
        type: String,
        require: true,
    },

    cep: {
        type: String,
        require: true,
    },

    neighborhood: {
      type: String,
      require: true,
    },
  
    type: {
        type: String,
        require: true,
    },

    street: {
        type: String,
        require: true,
    },
    
    number: {
        type: String,
        require: true,
    },

});

mongoose.model("location", locationSchema);
module.exports = {locationSchema}