/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Class Tweet
class Tweet extends Comment {
  constructor(id, text, author) {
    super(id, text, author);
    this._comments = [];
  }

  get comments() {
    return this._comments;
  }

  set comments(newComments) {
    this._comments = newComments;
  }

  static validate(tw) {
    if (tw
             && typeof (tw.id) === 'string'
             && typeof (tw.text) === 'string'
             && typeof (tw.createdAt) === 'object'
             && typeof (tw.author) === 'string'
             && typeof (tw.comments) === 'object') {
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (id && text) {
      const newComment = new Comment(id, text, this.author);
      if (Comment.validate(newComment)) {
        this.comments.push(newComment);
        return true;
      }
    }
    return false;
  }
}
