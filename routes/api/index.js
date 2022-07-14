const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router