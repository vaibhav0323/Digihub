// import express
const express = require('express');
const app = express();
const port = 5000;

const signUpRouter = require('./routers/signUpRouter');
const badgeRouter = require('./routers/badgeRouter');
const studentRouter = require('./routers/studentRouter');
const loginRouter = require('./routers/loginRouter');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());


app.use('/badge', badgeRouter);
app.use('/signUp', signUpRouter);
app.use('/student', studentRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.send('Working fine');
});

app.get('/home', (req, res) => {
    res.send('Response from home');
})

// add
// delete


app.listen( port, () => { console.log('server started') } );