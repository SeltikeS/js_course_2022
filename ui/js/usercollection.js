/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

class UserCollection {
  constructor(users = []) {
    this._users = users;
    this.restore();
  }

  isExist(user) {
    let isExist = false;
    this._users.forEach((usr) => {
      if (usr.login === user.login) {
        isExist = true;
      }
    });
    return isExist;
  }

  login(user) {
    let isOk = false;
    this._users.forEach((usr) => {
      if (usr.login === user.login
          && usr.pass === user.pass) {
        isOk = true;
      }
    });
    return isOk;
  }

  add(user) {
    if (user
        && (typeof (user) === 'object')
        && (user.login)
        && (typeof (user.login) === 'string')
        && (user.pass)
        && (typeof (user.pass) === 'string')
        && (!this.isExist(user))) {
      this._users.push(new User(user.login, user.pass));
      this.save();
      return true;
    }
    return false;
  }

  save() {
    const jsonUsers = JSON.stringify(this._users);
    localStorage.setItem('users', jsonUsers);
  }

  restore() {
    const jsonUsers = localStorage.getItem('users') || [];
    this._users = JSON.parse(jsonUsers).map((user) => new User(user.login, user.pass));
  }
}
