// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'LacyPupper',
    //     age: 8
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Lacy',
    //         age: 8
    //     }, {
    //         name: 'Nicole',
    //         age: 29
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Walk the puppers',
            completed: false
        }, {
            description: 'Pet the puppers',
            completed: true
        }, {
            description: 'Feed the puppers',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            console.log('Unable to insert tasks!')
        }
        console.log(result.ops)
    })
})