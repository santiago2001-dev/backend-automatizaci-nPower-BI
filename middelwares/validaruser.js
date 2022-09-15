const db = require('../db/conexion');


const existeUser = async(req,res,next)=>{
    const nombreUsuario=  await req.body.nombreUsuario;
    
    let  validation ;  
    const  sql =  `SELECT nombreUsuario FROM usuarios WHERE nombreUsuario = '${nombreUsuario}'`;
   
     db.query(sql,(error,results)=>{
        if(error){
            throw error
        }
        else{
             
         
            results.forEach(element => {
             validation = element.nombreUsuario

           });
        }
             if(validation == nombreUsuario){
                return res.status(400).json('correo ya esta registrado');
             }

          else if(validation == undefined){
              next(); 
          }


       
      
     }) 



     
}


const existeUserTrue = async(req,res,next)=>{
    const {nombreUsuario} = await req.body;
    
    let  validation ;  
        const  sql =  `SELECT nombreUsuario FROM usuarios WHERE nombreUsuario = '${nombreUsuario}'`;
       
        db.query(sql,(error,results)=>{
            if(error){
                throw error
            }
            else{
                
            
                results.forEach(element => {
                 validation = element.nombreUsuario
    
               });
            
                 if(validation !== nombreUsuario){ 
                    return res.status(400).json('usuario no esta registrado');
                    

                 }else{
                    next();
                 }
          
              
            }
          
         }) 
}




module.exports={ existeUser,existeUserTrue} 