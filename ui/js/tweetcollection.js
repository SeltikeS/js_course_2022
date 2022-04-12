/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

// Class TweetCollection
class TweetCollection {
  constructor(tws = [], newCnt = 0) {
    this._user = JSON.parse(localStorage.getItem('currentUser'));
    this._id = new Counter(newCnt);
    this._tweets = tws;
    this.restore();
  }

  static filterConfigCheck(filt, tw) {
    if ((filt.author && !tw.author.toLowerCase().includes(filt.author.toLowerCase()))
            || new Date(filt.dateTo) < tw.createdAt
            || new Date(filt.dateFrom) > tw.createdAt
            || (filt.text && !tw.text.toLowerCase().includes(filt.text.toLowerCase()))) {
      return false;
    }
    if (filt.hashtags) {
      for (let i = 0; i < filt.hashtags.length; ++i) {
        if (!tw.text.toLowerCase().includes(`#${filt.hashtags[i].toLowerCase()}`)) {
          return false;
        }
      }
    }
    return true;
  }

  get user() {
    return this._user;
  }

  set user(newUser) {
    this._user = newUser;
  }

  get id() {
    return this._id;
  }

  get filterConfig() {
    return this._filterConfig;
  }

  getPage(
    skip = 0,
    top = 10,
    filterConfig = {
      author: null,
      dateFrom: null,
      dateTo: new Date(),
      hashtags: null,
      text: '',
    },
  ) {
    const out = [];
    let skipCnt = skip;
    let topCnt = top;

    for (let i = this._tweets.length - 1; i >= 0; --i) {
      if (TweetCollection.filterConfigCheck(filterConfig, this._tweets[i])) {
        if (skipCnt) {
          skipCnt--;
          // eslint-disable-next-line no-continue
          continue;
        }
        if (topCnt) {
          out.push(this._tweets[i]);
          topCnt--;
        } else {
          break;
        }
      }
    }

    return out;
  }

  get(id) {
    return this._tweets.find((tweet) => Tweet.validate(tweet) && tweet.id === id);
  }

  add(text) {
    if (text && text.length <= 280) {
      const newTweet = new Tweet(this.id.next(), text, this.user);
      if (Tweet.validate(newTweet)) {
        this._tweets.push(newTweet);
        this.save();
        return true;
      }
    }
    return false;
  }

  edit(id, text) {
    const tw = this.get(id);
    if (Tweet.validate(tw) && tw.author === this.user) {
      tw.text = text;
      this.save();
      return true;
    }
    return false;
  }

  remove(id) {
    const index = this._tweets.findIndex((tweet) => Tweet.validate(tweet)
                                                    && tweet.author === this.user
                                                    && tweet.id === id);
    if (index >= 0) {
      this._tweets.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (id && text && text.length <= 280) {
      this.get(id).addComment(this.id.next(), text, this.user);
      this.save();
      return true;
    }
    return false;
  }

  addAll(tws) {
    const invalidTweets = [];
    tws.forEach((tw) => {
      if (Tweet.validate(tw)) {
        const newTweet = new Tweet(
          this.id.next(),
          tw.text,
          tw.author,
          tw.createdAt,
        );
        tw._comments.forEach((com) => {
          if (Comment.validate(com)) {
            newTweet._comments.push(new Comment(
              this.id.next(),
              com.text,
              com.author,
              com.createdAt,
            ));
          }
        });
        this._tweets.push(newTweet);
      } else {
        invalidTweets.push(tw);
      }
    });
    this.save();
    return invalidTweets;
  }

  clear() {
    this._tweets = [];
  }

  save() {
    const jsonTweets = JSON.stringify(this._tweets);
    localStorage.setItem('tweets', jsonTweets);
  }

  restore() {
    const jsonTweets = localStorage.getItem('tweets');
    const tws = JSON.parse(jsonTweets);
    tws.forEach((tw) => {
      const newTweet = new Tweet(
        this.id.next(),
        tw._text,
        tw._author,
        new Date(tw._createdAt),
      );

      tw._comments.forEach((com) => {
        const newComment = new Comment(
          this.id.next(),
          com._text,
          com._author,
          new Date(com._createdAt),
        );
        newTweet._comments.push(newComment);
      });

      this._tweets.push(newTweet);
    });
  }
}
