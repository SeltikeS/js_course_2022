// Class Comment
class Comment {
  constructor(id, text, author) {
    this._id = id;
    this._text = text;
    this._createdAt = new Date();
    this._author = author;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get author() {
    return this._author;
  }

  static validate(com) {
    if (com
                && typeof (com._id) === 'string'
                && typeof (com._text) === 'string'
                && typeof (com._createdAt) === 'object'
                && typeof (com._author) === 'string') {
      return true;
    }
    return false;
  }
}
