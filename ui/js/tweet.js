/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Class Tweet
class Tweet extends Comment {
  constructor(id, text, author) {
    super(id, text, author);
    this._comments = [];
  }

  static validate(tw) {
    if (tw
             && typeof (tw.id) === 'string'
             && typeof (tw.text) === 'string'
             && typeof (tw.createdAt) === 'object'
             && typeof (tw.author) === 'string'
             && typeof (tw._comments) === 'object') {
      return true;
    }
    return false;
  }
}
