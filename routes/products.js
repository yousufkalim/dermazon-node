const {
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
  getAllProducts,
  deleteAllProducts,
  getDocumentCounts,
} = require('../controllers/products');
const { checkAdminAuth } = require('../middleware/adminAuth');
const { checkAuth } = require('../middleware/checkAuth');
const { checkProductExists } = require('../middleware/checkProductExist');
const { upload } = require('../middleware/multer');
const { createProductValidate } = require('../middleware/validators');

const router = require('express').Router();

router.post(
  '/',
  upload.array('images'),
  checkAuth,
  checkAdminAuth,
  createProductValidate,
  createProduct,
);
router.patch(
  '/:id',
  upload.array('images'),
  checkAuth,
  checkAdminAuth,
  checkProductExists,
  updateProduct,
);
router.get('/deleteAllProducts', checkAuth, checkAdminAuth, deleteAllProducts);
router.get('/getCounts', getDocumentCounts);
router.get('/:id', getProductById);
router.delete('/:id', checkAuth, checkAdminAuth, checkProductExists, deleteProduct);
router.get('/', getAllProducts);

module.exports = router;
