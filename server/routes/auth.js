let express = require('express');
let router = express.Router();

let authController = require('../controllers/auth');
let chatController = require('../controllers/chat')

/* POST - processes the Login Page */
router.post('/login', authController.processLoginPage);

// /* POST - processes the User Registration Page */
router.post('/register', authController.processRegisterPage);

// /* GET - perform user logout */
router.get('/logout', authController.performLogout);

router.get('/dashboard/:id',chatController.chatHistory);

router.get('/dashboard/:id/owner',userController.ownUser);

router.post('/dashboard/:id/saver',userController.currenUserList);

module.exports = router;
