// Class Tweet
class Tweet extends Comment {
  constructor(id, text, author) {
    super(id, text, author);
    this._comments = [];
  }

  static validate(tw) {
    if (tw
             && typeof (tw._id) === 'string'
             && typeof (tw._text) === 'string'
             && typeof (tw._createdAt) === 'object'
             && typeof (tw._author) === 'string'
             && typeof (tw._comments) === 'object') {
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (id && text) {
      const newComment = new Comment(id, text, this._author);
      if (Comment.validate(newComment)) {
        this._comments.push(newComment);
        return true;
      }
    }
    return false;
  }
}
