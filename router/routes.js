const express = require("express");
const router = express.Router();
const property = require('../models/property_data'); // Assuming 'property_data' is the correct model name
const multer = require("multer");
const fs = require('fs');

// image upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        // Use file.fieldname instead of file.filename
    },
});


// image upload middleware
var upload = multer({
    storage: storage,
}).single("image");

// get data
// router.get('/', (req, res) => {
//     property.find().exec((err, properties) => { 
//         if (!err) {
//             res.render('index', {
//                 title: "Home page",
//                 property: properties 
//             });
//         } else {
//             res.json({
//                 message: err.message
//             });
//         }
//     });
// });

router.get('/', async (req, res) => {
    try {
        const properties = await property.find({}).exec();
        res.render('index', {
            title: 'Property Listing',
            property: properties,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// insert route
router.get("/addProperty", (req, res) => {
    res.render("insert", {
        title: "Add Property"
    });
});

router.post("/addProperty",upload, function (req, res) {
    console.log(req.body);
    var property1 = new property({

        property_name: req.body.name,
        property_category_name: req.body.property_category_name,
        description: req.body.description,
        area: req.body.area,
        property_picture: req.file.filename, // Fixed property file field
        price: req.body.price,
        number_of_years: req.body.number_of_years
    });

    property1.save()
    .then((property) => {
        res.status(200).send(property);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });

});

module.exports = router;
