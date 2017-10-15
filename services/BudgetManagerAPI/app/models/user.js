const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  clients: [
    {
      email: {
        type: String,
        required: true,
        unique: true
      },

      name: {
        type: String,
        required: true
      },

      phone: { type: String },

      budgets: [
        {
          state: { type: String, required: true },
          title: { type: String, required: true },
          price: { type: Number, required: true },
          items: [{}]
        }
      ]
    }
  ]
});

// We won't use arrow functions here because of automatic lexical scope binding
Schema.pre('save', function (next) {
  const user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);

      bcrypt.hash(user.password, salt, null, (error, hash) => {
        if (error) return next(error);

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

Schema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (error, matches) => {
    if (error) return callback(error);
    callback(null, matches);
  });
};

mongoose.model('User', Schema);
