const express = require('express');
const router = express.Router();

const data = require('./data');


router.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.find((x) => x._id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ msg: 'Product not found' });
    }
});


router.get('/api/products', (req, res) => {
    res.send(data);
});



module.exports = router;
