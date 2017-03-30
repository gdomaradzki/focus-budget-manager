module.exports = (mongoUri) => {
  let mongoose = require('mongoose');
  //MLabs
  mongoose.connect('mongodb://admin:admin@ds137110.mlab.com:37110/vue-todo-db');

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  })

  mongoose.connection.on('error', (error) => {
    console.log('Failed to connect to MongoDB: ' + error);
  })

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Application terminated, connection closed');
      process.exit(0);
    })
  })
}
