var express = require('express');
var router = express.Router();var mysql=require('mysql');
var connection=mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'sad'
});

connection.connect(function(err)
{
	if(err)
		console.log(err);
	else
		console.log('connected successfully to the database');	
});


//get record of all the doctors
router.get('/', function(req, res, next) {
	connection.query('select * from doctor',function(err,result)
	{
		if(err)
			console.log(err);
		else
			res.json(result);
	});
});

//to add doctors
router.post('/add',function(req,res,next)
{
		console.log(req.body);
	connection.query('insert into doctor set ?',req.body,function(err)
	{
		if(err)
			console.log(err);
		else
			console.log('added');
		res.send();
	})
});

//to list doctors as per specialization

//to return list as per search string
router.post('/list',function(req,res,next)
{
	var sp=req.body.sp;
	//console.log(sp);
	var query="select * from doctor where specialization like"+"\""+sp+"%\"";
	connection.query(query,
		function(err,result)
	{
		if(err)
			console.log(err);
		else
			res.json(result);
	});

});


module.exports = router;
