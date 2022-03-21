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

  get text() {
    return this._text;
  }

  set text(newText) {
    this._text = newText;
  }

  get createdAt() {
    return this._createdAt;
  }

  get author() {
    return this._author;
  }

  static validate(com) {
    if (com
                && typeof (com.id) === 'string'
                && typeof (com.text) === 'string'
                && typeof (com.createdAt) === 'object'
                && typeof (com.author) === 'string') {
      return true;
    }
    return false;
  }
}
