const express = require('express')

const app = express()

let cnt = 0

app.use((res, req, next) => {
    cnt++;
    console.log("Number of requests are ", cnt)
    next()
})

let start = performance.now()
app.use((res, req, next) => {
    start = performance.now()
    next()
})

app.get("/", (req, res, next) => {
    let v = 0
    for(let i=0; i<10**9; i++){
        v += i
    }
    res.send('Hello ' + String(v) + String(cnt))
    next()
})

app.use((req, res, next) => {
    const t = performance.now() - start + 'ms'
    console.log(t)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send("Error")
})

app.listen(3000)