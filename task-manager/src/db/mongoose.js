const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const lacy = new User({
    name: 'LacyPupper',
    age: 8
})

lacy.save().then(() => {
    console.log(lacy)
}).catch((error) => {
    console.log('Error!', error)
})