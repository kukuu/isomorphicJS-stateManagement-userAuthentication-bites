import express from 'express';

//initialise express
let app = express();

//define catch all route
app.get('/*',(req, res) => {
	res.send("hello world");
});

//port to listen on
app.listen(3011, () => console.log("Running up on localhost:3011"));