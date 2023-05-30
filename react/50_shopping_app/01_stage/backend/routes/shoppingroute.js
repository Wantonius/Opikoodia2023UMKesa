const express = require("express");
const itemModel = require("../models/item");

let router = express.Router();

router.get("/shopping", function(req,res) {
	itemModel.find().then(function(items){
		return res.status(200).json(items);
	}).catch(function(err){
		console.log(err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

router.post("/shopping", function(req,res) {
	let item = new itemModel({
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price
	})
	item.save().then(function(item) {
		return res.status(201).json(item)
	}).catch(function(err) {
		console.log(err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})
module.exports = router;