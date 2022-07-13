const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
