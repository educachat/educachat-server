const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  console.log('register');
  const { email } = req.body;
  
  try {
    
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: 'Email já cadastrado' });
    }

    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({ user });
  
  } catch (err) {
    res.status(400).send({ error: 'Falha no Registro' });
  }

});

module.exports = app => app.use('/auth', router);