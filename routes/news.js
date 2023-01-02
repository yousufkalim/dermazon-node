const {
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
  getAllNews,
} = require('../controllers/news');
const { checkNewsExists } = require('../middleware/checkNews');
const { upload } = require('../middleware/multer');

const router = require('express').Router();

router.post('/', upload.single('image'), createNews);
router.get('/:id', getNewsById);
router.patch('/:id', upload.single('image'), checkNewsExists, updateNews);
router.delete('/:id', checkNewsExists, deleteNews);
router.get('/', getAllNews);

module.exports = router;
