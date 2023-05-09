const express = require("express");

const crearTask = async (req,res = express.request) =>{
    try{
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok: true,
            task: saved
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Internal error'
        })
    }
}

const listarTasks = async ( req,res = express.request) => {
    const usuarios = await Usuario.find()
                        .populate('tareas','title');
    try{
        res.status(200).json({
            ok: true,
            usuarios,
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno'
        })

    }
}

module.exports = {crearTask,listarTasks}