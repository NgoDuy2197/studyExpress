
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [{
      "id": 1,
      "name": "duy_1",
      "username": "duynq123",
      "address": "hanoi1",
      "password": "123"
    }] })
  .write();

module.exports = db;