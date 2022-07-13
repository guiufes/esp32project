const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/', async (req, res)=>{
    try{
        const listaDevices = await Device.find()
        res.json({
            success: true,
            message: listaDevices
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível listar os devices"
        })
    }
})

router.get('/', (req, res)=>{
    const devices = [{
        id: 123,
        nome: "Geladeira",
        kWh: 23,
        corrente: 2.1,
        voltagem: 127,
        fp: 1
    }]
    res.json({
        success: true,
        devices: devices
    })
})

router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        kWh: req.body.kWh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })
    try{
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNovoDevice
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar o novo devices"
        })
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const updateDeviceID = await Device.updateOne(
            {_id: req.params.id},
            {kWh: req.body.kWh,
            corrente: req.body.corrente,
            voltagem: req.body.voltagem,
            fp: req.body.fp}
        )
        res.json({
            success: true,
            update: updateDeviceID.nModified
        })
    }
    catch(err){
        res.json({
            success: false,
            message: "Não foi possível atualizar o device"
        })  
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const deleteMedidasID = await Medidas.deleteOne({
            _id: req.params.id
        });
        res.json({
            success: true,
            data: deleteMedidasID 
        })
    }
    catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

module.exports = router