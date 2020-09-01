const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if (!value.length > 6 || value === 'password'){
                throw new Error('Passowrd must be 6 characters or more')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (value.toLowerCase().includes('password')) {
                throw new Error("Password cannot contain 'password'")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const lacy = new User({
    name: '    Lacy   ',
    email: 'mike@            ',
    password: '         re32       '
})

lacy.save().then(() => {
    console.log(lacy)
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const clean = new Task({
//     description: 'Clean house',
//     completed: false
// })

// clean.save().then(() => {
//     console.log(clean)
// }).catch((error) => {
//     console.log('ERROR: ', error)
// })