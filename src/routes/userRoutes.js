const express = require('express');
const studentController = require('../controllers/userController');

const router = express.Router();

router.post('/user', studentController.createUser);
router.get('/users', studentController.listUser);
router.put('/user/:id', studentController.updateUser);
router.delete('/user/:id', studentController.deleteUser);

module.exports = router;