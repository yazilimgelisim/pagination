const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ottoman23',
    database:'nodejs'
})



db.connect(err=>{
    if(err) throw err;
    console.log('Veri tabanına başarılı bir şekilde bağlanıldı')
})


module.exports = db