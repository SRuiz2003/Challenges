const express = require('express')
const Usuario = require('../models/Usuario')
const {generarJWT} = require('../helpers/jwt')
const bcrypt = require('bcryptjs/dist/bcrypt')
const crearUsuario = async (req,res = express.response) => {
    const {name,email,password} = req.body
    
    try{
        let usuario = await Usuario.findOne({email:email})
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con este correo ya existe',
            })
        }

        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);
        await usuario.save();

        return res.status(200).json({
            ok:true,
            usuario
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            ok:false,
            error,
        })
    }

}

const loginUsuario= async (req,res = express.response) => {
    const {email,password} = req.body
    
    let usuario = await Usuario.findOne({email:email})

    const token = await (generarJWT(usuario.id,usuario.name))
    return res.json({
        ok:true,
        usuario,
        token
    })
}

const revalidarToken= (req,res = express.response) => {
    const {uid, name} = req
    const token = await( generarJWT(uid,name) )
    res.json({
        ok:true,
        renew: "Done"
    })
}

module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}