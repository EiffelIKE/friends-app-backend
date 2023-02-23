const store = require('../../../store/mock');

const TABLE = 'friends';

const list = () => {
  return store.list(TABLE);
}

const getFriend = (id) => {
  return store.get(TABLE, id);
}

const deleteFriend = (id) => {
  return store.remove(TABLE, id);
}

const addFriend = (data) => {
  return store.upsert(TABLE, data);
}

const editFriend = (id, data) => {
  return store.edit(TABLE, id, data)
}

module.exports = {
  list,
  getFriend,
  deleteFriend,
  addFriend,
  editFriend
}