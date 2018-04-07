
const { Router } = require('express');
const router = module.exports = Router();

/*
 * GET home page.
 */

router.get('/', (req, res) => res.render('index'));