const mongoose = require('mongoose');

const propertyCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const PropertyCategory = mongoose.model('PropertyCategory', propertyCategorySchema);

module.exports = PropertyCategory;
