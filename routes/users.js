const {Router}= require('express');
const router = Router();
const {check} = require('express-validator');
const {getuser, insertUser,updateuser,deleteUser} = require('../controllers/users');
const {validarCmapos} = require('../middelwares/validarCampos')

router.get('/',getuser);

router.post('/',

check('contraseña','la contraseña debe tener minimo 8 caracteres').isLength({min:8}),
validarCmapos,
insertUser);
  
router.put('/:id',
check('contraseña','la contraseña debe tener minimo 8 caracteres').isLength({min:8}),
validarCmapos,
updateuser);

router.delete('/:id',deleteUser);


module.exports = router; 