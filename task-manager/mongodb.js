// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5f467ead9b43ce0b2a8e8bc5") }, (error, user) => {
    //     if (error) {
    //         return console.log('User not found')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('User not found')
    //     }

    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new mongodb.ObjectId("5f45af7e3db608f9043499b6")}, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find( {completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})