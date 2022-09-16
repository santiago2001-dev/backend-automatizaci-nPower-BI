const {Router}= require('express');
const router = Router();
const {
    getDocument,getDocumentById,search,insertDocument,updateDocument,delteDocument
} = require('../controllers/document')

router.get('/',getDocument);
router.get('/:id',getDocumentById);
router.post('/search',search);

router.post('/insert',insertDocument);
router.put('/:id',updateDocument);
router.delete('/:id',delteDocument);


module.exports = router