const conect = require('../db/conexion');
//jsonWebToken
const jwt =  require('jsonwebtoken');
// libreria encriptacion de contraseña
const bcrypt = require('bcryptjs');

const auth = async(req,res)=>{ 
    const {nombreUsuario,contraseña} = await req.body;

    
    let pas;  

    const sql =`SELECT contraseña FROM usuarios WHERE nombreUsuario = '${nombreUsuario}' `;
     
    if(nombreUsuario  == undefined){
        res.json({ error :  'nameuser or password not found'})
    }   
    else{    

        conect.query(sql,(error,results)=>{
            if(error){
                res.json({error })
            }
            else{
               results.forEach(element => {
                  pas = element.contraseña;
                 });

               const compare = bcrypt.compareSync(contraseña,pas);
                
                 if(!compare){
                     res.json({error : 'user not exist'});
                 } 
                 else{
                    if(results.length >0){
                        let data = JSON.stringify(results[0]);
                        const token = jwt.sign(data,'stil')
                        res.json({token})
                        console.log("loggeado")
                    }else{
                        
                        res.json('usuario incorrecto')
                    }
                       
                 }
           
            } 

    })}



}

module.exports = auth