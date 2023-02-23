const db = require("./dummyDb");

const list = (table) => {
  return db[table];
}

const get = (table, id) => {
  const colection = list(table);
  return colection.filter( item => item.id === id)[0] || null;
}

const upsert = (table, data) => {
  db[table].push(data);
}

const remove = (table, id) => {
  const colection = list(table);
  const item = get(table,id);
  const indexItem = list.indexOf(item);
  if (!item) {
    return null;
  }
  const previusData = colection.slice(0,indexItem);
  const nextData = colection.slice(index +1);
  const res = previusData.concat(nextData);
  db[table] = res;
  return res;
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
