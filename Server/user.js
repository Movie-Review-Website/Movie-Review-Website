const express = require('express')
const cryptoJs = require('crypto-js')
const pool = require('./sql')
const jwt = require('jsonwebtoken')

const result = require('./result')
const config = require('./config')

const router = express.Router()

router.post('/register',(req,res) => {
    const {id,first_name,last_name,email,password,mobile,birth} = req.body
    const encryptedPassword = String(cryptoJs.SHA256(password))

    const sql = `INSERT INTO users (id,first_name,last_name,email,password,mobile,birth) values (?,?,?,?,?,?,?)`

    pool.query(sql,[id,first_name,last_name,email,encryptedPassword,mobile,birth],(error,data) => {
        if(data){
            res.send({status:'success',data})
        }
        else{
            res.send({status:'error',error})
        }
    })
})

router.post('/login',(req,res) => {
    const {email,password} = req.body
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    pool.query(sql,[email,encryptedPassword],(error,data) => {
      if (data) {
      if (data.length != 0) {
        const payload = {
          userId: data[0].id,
        }
        const token = jwt.sign(payload, config.secret)
        const body = {
          token: token,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
        }
        res.send(result.createSuccessResult(body))
      } else res.send(result.createErrorResult('Invalid email or password'))
    } else res.send(result.createErrorResult(error))
    })

})


module.exports = router


