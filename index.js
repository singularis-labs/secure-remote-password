module.exports = {
  ...require('./client'),
  ...require('./server'),
  Client: require('./client'),
  Server: require('./server')
};

