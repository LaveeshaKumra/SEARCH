var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var body = require('body-parser');
var aa=body.urlencoded({extended:false});

var app = express();
var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'search'
});


app.get("/search",function(req,res){
res.render("searchmain");
}); 


app.post("/search1",aa,function(req,res){
var name=req.body.abc;
console.log(name);
var sql = "select * from emp where id='"+name+"'";
//console.log(sql);
con.query(sql,function(err,data){
	if (err) throw err;
	//console.log(data);
	res.render("output",{abc:data});

});
});
http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});
