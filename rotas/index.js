
const router = require('express').Router()
require('../mongoDB/mongoconn')

const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req, res)=>{
    res.json({
        success: false,
        message: "este é um acesso reservado"
    })
})

module.exports = router