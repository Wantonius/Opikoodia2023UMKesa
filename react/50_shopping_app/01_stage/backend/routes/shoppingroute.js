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

module.exports = router;