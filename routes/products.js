const {
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
  getAllProducts,
  deleteAllProducts,
  getDocumentCounts,
} = require('../controllers/products');
const { checkProductExists } = require('../middleware/checkProductExist');
const { upload } = require('../middleware/multer');
const { createProductValidate } = require('../middleware/validators');

const router = require('express').Router();

router.post('/', upload.array('images'), createProductValidate, createProduct);
router.patch('/:id', upload.array('images'), checkProductExists, updateProduct);
router.get('/deleteAllProducts', deleteAllProducts);
router.get('/getCounts', getDocumentCounts);
router.get('/:id', getProductById);
router.delete('/:id', checkProductExists, deleteProduct);
router.get('/', getAllProducts);

module.exports = router;
