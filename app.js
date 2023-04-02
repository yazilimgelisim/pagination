const express = require('express')
const app = express()
const db = require('./connect')



app.set('view engine', 'ejs')
app.use(express.static('public'))




app.get('/', (req, res) => {
    let page = req.query.page || 1
    let postPerPage = 2
    let i = page > 5 ? page - 3 : 1
    let sql = `select * from texts limit ${((postPerPage * page) - postPerPage)}, ${postPerPage}`
    let sql2 = 'select * from texts'
    db.query(sql, (err, result)=>{
        db.query(sql2, (err2, result2)=>{
            let count = result2.length
            res.render('index',{
                result:result,
                nowPage:parseInt(page),
                totalPage:Math.ceil(count/postPerPage),
                i:i
            })
        })
    })
})








app.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening http://127.0.0.1:3000/')
})