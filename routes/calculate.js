var express = require('express');
var router = express.Router();

/* GET */
router.post('/', function(req, res, next) {
	var exp = req.body.exp;
	var ans = eval(req.body.exp);
	res.send({'response': ans});
});

module.exports = router;
