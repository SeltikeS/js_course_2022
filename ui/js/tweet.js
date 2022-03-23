/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Class Tweet
class Tweet extends Comment {
  constructor(id, text, author, date) {
    super(id, text, author, date);
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

  addComment(id, text, author, date = new Date()) {
    if (id && text && author) {
      const newComment = new Comment(id, text, author, date);
      if (Comment.validate(newComment)) {
        this._comments.push(newComment);
        return true;
      }
    }
    return false;
  }
}
