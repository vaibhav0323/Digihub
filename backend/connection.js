const mongoose = require('mongoose');

const url = 'mongodb+srv://vaibhav:1234@cluster0.dm3lexb.mongodb.net/digihub?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('server connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;