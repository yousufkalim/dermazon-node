const {
  addComment,
  getAllComments,
  updateComment,
  getCommentyId,
  deleteComment,
} = require('../controllers/comments');
const { checkAdminAuth } = require('../middleware/adminAuth');
const { checkAuth } = require('../middleware/checkAuth');

const router = require('express').Router();

router.post('/', checkAuth, checkAdminAuth, addComment);
router.get('/', getAllComments);
router.get('/:id', getCommentyId);
router.patch('/:id', checkAuth, checkAdminAuth, updateComment);
router.delete('/:id', checkAuth, checkAdminAuth, deleteComment);

module.exports = router;
