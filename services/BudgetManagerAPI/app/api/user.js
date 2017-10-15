const mongoose = require('mongoose'),
      config = require('@config');

api.setup = (req, res) => {
  const admin = new User({
    username: 'admin',
    password: 'admin',
    clients: []
  });

  admin.save(error => {
    if (error) throw error;

    console.log('Admin account was succesfully set up');
    res.json({ success: true });
  })
}

api.index = (User) => (req, res) => {
  const token = config.get('budgetsecret');

  if (token) {
    User.find({}, (error, users) => {
      if (error) throw error;
      res.status(200).json(users);
    });
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.signup = (req, res) => {
  if (!req.body.username || !req.body.password) res.json({ success: false, message: 'Please, pass an username and password.' });
  else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      clients: []
    });

    newUser.save((error) => {
      if (error) return res.json({ success: false, message: 'Username already exists.' });
      res.json({ success: true, message: 'Account created successfully' });
    })
  }
}
