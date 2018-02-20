let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let User = require('../models/User');

// Criando novo usuário
router.post('/', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  },
  (err, user) => {
    if (err) return res.status(500).send('Aconteceu algum problema ao adicionar a informação no banco de dados.');
    res.status(200).send(user);
  });
});

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send('Aconteceu algum problema ao procurar os usuários no banco de dados.');
    res.status(200).send(users);
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send('Aconteceu algum problema ao procurar o usuário no banco de dados.');
    if (!user) return res.status(404).send('Usuário não encontrado');
    res.status(200).send(user);
  })
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send('Aconteceu algum problema ao deletar o usuário no banco de dados.');
    res.status(200).send('O usuário ${ user.name } foi deletado')
  });
});

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
    if(err) return res.status(500).send('Aconteceu algum problema ao atualizar os dados do usuário no banco de dados.');
    res.status(200).send(user);
  })
});

module.exports = router;