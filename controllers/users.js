const conect = require('../db/conexion');
const {encript} = require('../middelwares/encrip');


const getuser = async(req,res)=>{
    const sql=  `SELECT * FROM usuarios`;
    conect.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json(
                results
            )
        }
    })
}

const insertUser= async(req,res)=>{
    const {nombre,nombreUsuario,contraseña} = await req.body;
    const hash = await encript(contraseña);
    const sql = `INSERT INTO usuarios(nombre,nombreUsuario,contraseña) VALUES ('${nombre}','${nombreUsuario}','${hash}')`
    conect.query(sql,(error,resutls)=>{
        if(error){ 
            throw error
        }else{
            res.json("usuario agregado correctamente")

        }
    })

    
}
const updateuser = async(req,res)=>{
    const {id} = await req.params;
    const {nombre,nombreUsuario,contraseña} = await req.body;
    const hash = await encript(contraseña);
    
    let sql = `update usuarios set nombre = '${nombre}', nombreUsuario = '${nombreUsuario}', contraseña = '${hash}'
    where id = '${id}'`;
    await conect.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro actualizado'
            })
        }
    })

}


const deleteUser = async(req,res)=>{
    const {id} =  await req.params;
    let sql = `DELETE FROM usuarios where id = '${id}'`;
    await conect.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro eliminado'
            })
        }
    })

}

module.exports = {
    getuser,
    insertUser,
    updateuser,
    deleteUser
}
