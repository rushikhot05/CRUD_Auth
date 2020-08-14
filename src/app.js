const express = require('express')
const app = express();
const port = process.env.PORT;
const userRouter = require('./routers/student')
const students = require("./routers/student")
const users = require("./routers/user");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./db/db');

app.set('secretKey', process.env.JWT_KEY);

app.get('/', function(req, res) {
    res.json({"tutorial": "Building REST API"});
});

app.use('/users', users);
app.use('/students', validateUser, students);

function validateUser(req, res, next) {
    console.log(req.header('Authorization'))
    try {
        const token = req.header('Authorization').replace('Bearer ', '')     
        console.log(token)
        const data = jwt.verify(token, process.env.JWT_KEY)       
        if(!data){
            throw new Error()
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({error: "Not authorized to access this resource"})
    }
}

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong :( !!!" });
});

app.use(userRouter)

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})