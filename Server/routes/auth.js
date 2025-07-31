const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate, authorize, validateRequest } = require('../middleware/auth');

// Public routes
router.post('/register', validateRequest, authController.register);
router.post('/login', validateRequest, authController.login);

// Protected routes
router.get('/profile', authenticate, authController.getProfile);
router.put('/profile', authenticate, authController.updateProfile);
router.put('/change-password', authenticate, authController.changePassword);
router.post('/logout', authenticate, authController.logout);

// Role-specific routes
router.get('/customer/profile', authenticate, authorize('customer'), authController.getProfile);
router.get('/driver/profile', authenticate, authorize('driver'), authController.getProfile);

module.exports = router; 