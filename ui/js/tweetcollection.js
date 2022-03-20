// Class TweetCollection
class TweetCollection {
  constructor(tws) {
    this._tweets = tws;
    this._user = 'SeltikeS';
    this._id = new Counter();
  }

  static filterConfigCheck(filt, tw) {
    if ((filt.author && !tw._author.toLowerCase().includes(filt.author.toLowerCase()))
            || filt.dateTo < tw._createdAt
            || filt.dateFrom > tw._createdAt
            || (filt.text && !tw._text.toLowerCase().includes(filt.text.toLowerCase()))) {
      return false;
    }
    if (filt.hashtags) {
      for (let i = 0; i < filt.hashtags.length; ++i) {
        if (!tw._text.toLowerCase().includes(filt.hashtags[i].toLowerCase())) {
          return false;
        }
      }
    }
    return true;
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
      const newTweet = new Tweet(this._id.next(), text, this._user);
      if (Tweet.validate(newTweet)) {
        this._tweets.push(newTweet);
        return true;
      }
    }
    return false;
  }

  edit(id, text) {
    const tw = this.get(id);
    if (Tweet.validate(tw) && tw._author === this._user) {
      tw._text = text;
      return true;
    }
    return false;
  }

  remove(id) {
    const index = this._tweets.findIndex((tweet) => Tweet.validate(tweet)
                                                    && tweet._author === this._user
                                                    && tweet._id === id);
    if (index >= 0) {
      this._tweets.splice(index, 1);
      return true;
    }
    return false;
  }

  addAll(tws) {
    tws.forEach((element) => {
      if (Tweet.validate(element)) {
        this._tweets.push(element);
      }
    });
  }

  clear() {
    this._tweets = [];
  }
}
