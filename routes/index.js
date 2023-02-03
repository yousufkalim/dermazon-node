const { checkAdminAuth } = require('../middleware/adminAuth');
const { checkAuth } = require('../middleware/checkAuth');

/**
 * All api routes handles here
 * @author Yousuf Kalim
 */
const router = require('express').Router();

// Parent Routes
router.use('/admins', require('./admins')); // All the user routes
router.use('/users', require('./users')); // All the user routes
router.use('/auth', require('./auth')); // All the auth routes
router.use('/products', require('./products'));
router.use('/contactus', require('./contactus'));
router.use('/news', checkAuth, checkAdminAuth, require('./news'));

// Export

module.exports = router;
