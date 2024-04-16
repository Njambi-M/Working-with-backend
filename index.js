const express = require('express')
const app = express()
const port = 3000

// const birds = require('./routes/birds')
const catsRouter = require("./routes/cats.router")
app.use(express.json());
app.use('/cats', catsRouter);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.get('/', (req,res) => {
// res.send('root')
// })

// app.get('/about', (req, res) =>{
//     res.send('about')
// })

// app.get('/random.text', (req,res) => {
// res.send('random.text')
// })

// app.get('/ab?cd', (req,res)=>{
//     res.send('ab?cd')
// })

// app.get('/ab+cd', (req,res)=>{
//     res.send("ab+cd")
// })
// app.get(/a/, (req, res) => {
//     res.send('/a/')
//   })

// app.get(/.*fly$/, (req, res) => {
//     res.send('/.*fly$/')
//   })

