import express from 'express'
const app = express();


app.get('/', (req,res) => {
    res.send("Hey, thehre")
})

app.listen(3000)