/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

class User {
  constructor(login, pass) {
    this._login = login;
    this._pass = pass;
  }

  get login() {
    return this._login;
  }

  get pass() {
    return this._pass;
  }
}
