/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Class TweetCollection
// eslint-disable-next-line no-unused-vars
class TweetCollection {
  constructor(tws = [], newCnt = 0) {
    this._user = 'SeltikeS';
    this._id = new Counter(newCnt);
    this._tweets = tws;
  }

  static filterConfigCheck(filt, tw) {
    if ((filt.author && !tw.author.toLowerCase().includes(filt.author.toLowerCase()))
            || filt.dateTo < tw.createdAt
            || filt.dateFrom > tw.createdAt
            || (filt.text && !tw.text.toLowerCase().includes(filt.text.toLowerCase()))) {
      return false;
    }
    if (filt.hashtags) {
      for (let i = 0; i < filt.hashtags.length; ++i) {
        if (!tw.text.toLowerCase().includes(filt.hashtags[i].toLowerCase())) {
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
    if (text) {
      const newTweet = new Tweet(this.id.next(), text, this.user);
      if (Tweet.validate(newTweet)) {
        this._tweets.push(newTweet);
        return true;
      }
    }
    return false;
  }

  edit(id, text) {
    const tw = this.get(id);
    if (Tweet.validate(tw) && tw.author === this.user) {
      tw.text = text;
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
      return true;
    }
    return false;
  }

  addComment(id, text) {
    if (id && text) {
      this.get(id).addComment(this.id.next(), text, this.user);
      return true;
    }
    return false;
  }

  addAll(tws) {
    tws.forEach((tw) => {
      if (Tweet.validate(tw)) {
        this._tweets.push(tw);
      }
    });
  }

  clear() {
    this._tweets = [];
  }
}
