require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f49857871abdf628ba3ca03').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})