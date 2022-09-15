const sql = require('mysql');
const conexion = sql.createConnection({
    port : process.env.PORTDB,
    host : process.env.HOSTDB,
    database : process.env.DATABASE,
    user :process.env.USERDB,
    password : process.env.PASSDB

})

conexion.connect((err)=>{
    if(err){
        console.log(`error in db : ${err}`);

    }else{
        console.log('enable connection!!')

    }


});

module.exports  = conexion;