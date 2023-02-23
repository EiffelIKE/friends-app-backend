const db = require("./dummyDb");

const list = (table) => {
  return db[table];
}

const get = (table, id) => {
  const colection = list(table);
  if(id > colection.length - 1 || id < 0) {
    return null
  }
  return colection.filter( item => item.id === id)[0] || null;
}

const upsert = (table, data) => {
  db[table].push({
    ...data,
    id: db[table].length + 1
  });
}

const getValues = (table, id) => {
  const colection = list(table);
  const item = get(table,id);
  const indexItem = colection.indexOf(item);
  return {colection, item, indexItem};
}

const remove = (table, id) => {
  const {colection, item, indexItem} = getValues(table, id);
  if (item !== 0 && !item) {
    return null;
  }
  if(id > colection.length - 1 || id < 0) {
    return null;
  }
  const previusData = colection.slice(0,indexItem);
  const nextData = colection.slice(indexItem + 1);
  const res = previusData.concat(nextData);
  db[table] = res;
  return "Friend removed";
}

const edit = (table, id, data) => {
  const {colection, item, indexItem} = getValues(table, id)
  if (item !== 0 && !item) {
    return null;
  }
  if(id > colection.length - 1 || id < 0) {
    return null;
  }
  
  const res = {...colection[indexItem], ...data}
  db[table][indexItem] = res;
  return 'Friends successfully edited';
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  edit,
}
