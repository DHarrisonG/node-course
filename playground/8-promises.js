const add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)
// }).catch((e) => {
//     console.log(e)
// })

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sun2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})