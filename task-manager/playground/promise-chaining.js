require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate("5f4fcf43d9601bcec16c041a", {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})