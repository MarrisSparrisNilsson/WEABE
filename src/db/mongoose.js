const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sparris20:NilmartiT4@cluster0-rdupx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})