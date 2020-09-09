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

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age}) // or just age
    const count = await User.countDocuments({ age: age}) // or just age
    return count
}

updateAgeAndCount("5f4fcf43d9601bcec16c041a", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})