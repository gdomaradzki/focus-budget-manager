const mongoose = require('mongoose');

const api = {};

api.signup = (User) => (req, res) => {
  if (!req.body.username || !req.body.password) res.json({ success: false, message: 'Please, pass an username and password.' });
  else {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save(error => {
      if (error) return res.status(400).json({ success: false, message: 'Username already exists.' });
      res.json({ success: true, message: 'Account created successfully' });
    });
  }
}

module.exports = api;
