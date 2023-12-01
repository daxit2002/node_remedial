const mongoose = require('mongoose');

const propertyDataSchema = new mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_category_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    property_picture: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    number_of_years: {
        type: Number,
        required: true
    }
});

const PropertyData = mongoose.model('PropertyData', propertyDataSchema);

module.exports = PropertyData;
