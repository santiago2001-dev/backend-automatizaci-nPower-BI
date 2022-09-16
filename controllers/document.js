const { Result } = require('express-validator');
const conect = require('../db/conexion');

const getDocument =  async(req,res)=>{
    const sql = `SELECT * FROM tb_tipo_documento`;
    conect.query(sql,(error,Results)=>{
        if(error){
            throw error
        }else{
            res.json(Results)
        }

    })
    
}

const getDocumentById =  async(req,res)=>{
    const {id} =  await req.params;
    const sql  = `SELECT * FROM tb_tipo_documento where id = ${id}`
    conect.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json(results)
        }

    })
}


const search = async(req,res) =>{
    const {busqueda} = await req.body
    
    const sql = `SELECT * FROM tb_tipo_documento WHERE  nombre = '${busqueda}' OR codigo  = '${busqueda}' `;
 
     conect.query(sql, (error,rows,fields) => {
  
        if(error){
            throw error;
           
       }else{
           res.json(rows);
           
       }
    }
    )}


const insertDocument = async(req,res)=>{

    const {nombre,codigo}= await req.body;
    const sql = `INSERT INTO tb_tipo_documento(nombre,codigo)  VALUES ('${nombre}','${codigo}')`;
console.log(nombre,codigo)

    conect.query(sql,(error,resutls)=>{
        if(error){ 
            throw error
        }else{
            res.json("registro agregado correctamente")

        }
    })

}

const updateDocument = async(req,res)=>{
    const {id} = await req.params;
    const {codigo,nombre} = await req.body;
    const sql = `UPDATE  tb_tipo_documento SET nombre = '${nombre}', codigo = '${codigo}' where id = '${id}'`;
 
    conect.query(sql,(error,results)=>{
        if(error){
            throw error

        }else{
            res.json("registro actualizado")
        }
    })

}

const delteDocument = async(req,res)=>{
    const {id} = await req.params;
    
    const sql = `DELETE from tb_tipo_documento where id = ${id}`;
    conect.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json(" registro eleminado ")
        }
    })
}
module.exports = {
    getDocument,
    getDocumentById,
    search,
    insertDocument,
    updateDocument,
    delteDocument
}