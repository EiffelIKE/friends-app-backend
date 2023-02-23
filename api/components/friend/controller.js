const store = require('../../../store/mock');

const TABLE = 'friends';

const list = () => {
  return store.list(TABLE);
}

module.exports = {
  list,
}