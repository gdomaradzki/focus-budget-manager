const mongoose = require('mongoose'),
      PassportJWT = require('passport-jwt'),
      ExtractJWT = PassportJWT.ExtractJWT,
      Strategy = PassportJWT.Strategy,
      config = require('./index.js');

const User = mongoose.model('User');

module.export = (passport) => {
  const parameters = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
  };

  passport.use(new Strategy(parameters, (payload, done) => {
    User.findOne({ id: payload.id }, (error, user) => {
      if (error) return done(error, false);
      if (user) done(null, user);
      else done(null, false);
    });
  }));
}
