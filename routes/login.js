const {Router} =require('express');
const auth = require('../controllers/login');
const{existeUserTrue} = require('../middelwares/validaruser')
const router = Router();

router.post('/',
existeUserTrue,
auth);
module.exports = router;