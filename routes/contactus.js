const { createContact } = require('../controllers/contactus');
const { upload } = require('../middleware/multer');

const router = require('express').Router();

router.post('/', upload.single('attachmentfile'), createContact);
// router.get('/:id', getNewsById);
// router.patch('/:id', upload.single('image'), checkNewsExists, updateNews);
// router.delete('/:id', checkNewsExists, deleteNews);
// router.get('/', getAllNews);

module.exports = router;
