/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

class UserCollection {
  constructor(users = []) {
    this._users = users;
  }

  add(user) {
    if (user
        && (typeof (user) === 'object')
        && (user.login)
        && (typeof (user.login) === 'string')
        && (user.pass)
        && (typeof (user.pass) === 'string')) {
      this._users.push(new User(user.login, user.pass));
    }
  }
}
