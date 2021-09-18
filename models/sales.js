const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
		name: {type: String, required: true },
        body: {type: String, required: true},
        date: {type: String, required: true}, 
		Img: { type: String, required: true },
})

const Sale = model('Sales', saleSchema);

module.exports = Sale;