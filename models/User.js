const knex = require('../db/knex');

class User {
  static async create(username, password) {
    return await knex('users').insert({ username, password });
  }

  static async findByUsername(username) {
    return await knex('users').where({ username }).first();
  }

  // Tambahkan metode lain sesuai kebutuhan
}

module.exports = User;
