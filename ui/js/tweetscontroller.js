/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class TweetsController
class TweetsController {
  constructor(users = [], tws = [], count = 0) {
    this._users = new UserCollection(users);
    this._tweets = new TweetCollection(tws, count);
    this._headerView = new HeaderView('header-id');
    this._tweetFeedView = new TweetFeedView('tweet-feed-id');
    this._filterView = new FilterView('filter-id');
    this._tweetView = new TweetView('tweet-feed-id');
  }

  _hiddenAdd(item) {
    if (!item.classList.contains('hidden')) {
      item.classList.add('hidden');
    }
  }

  _hiddenRemove(item) {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
    }
  }

  _viewIfHasUser(item) {
    if (this._tweets.user !== ''
    && item.classList.contains('hidden')) {
      item.classList.remove('hidden');
    }
  }

  // Methods
  getFeed(skip, top, filterConfig) {
    const filters = document.querySelector('.filters');
    const addTweetArea = document.querySelector('.add__tweet');
    const addTweetPanel = document.querySelector('.panel__add');
    const showMore = document.querySelector('.show__more');

    this._hiddenRemove(filters);
    this._hiddenRemove(showMore);

    const tweetFeed = this._tweets.getPage(skip, top, filterConfig);
    this._filterView.display(filterConfig);
    this._viewIfHasUser(addTweetArea);
    this._viewIfHasUser(addTweetPanel);
    this._tweetFeedView.display(tweetFeed);
  }

  setCurrentUser(user) {
    const addTweetArea = document.querySelector('.add__tweet');
    const addTweetPanel = document.querySelector('.panel__add');

    this._tweets.user = user;
    this._headerView.display(this._tweets.user);
    this._viewIfHasUser(addTweetArea);
    this._viewIfHasUser(addTweetPanel);
    this.getFeed();
  }

  addTweet(text) {
    this._tweets.add(text);
    this.getFeed();
  }

  editTweet(id, text) {
    this._tweets.edit(id, text);
    this.getFeed();
  }

  removeTweet(id) {
    this._tweets.remove(id);
    this.getFeed();
  }

  showTweet(id = null) {
    const filters = document.querySelector('.filters');
    const addTweetArea = document.querySelector('.add__tweet');
    const addTweetPanel = document.querySelector('.panel__add');
    const showMore = document.querySelector('.show__more');

    this._hiddenAdd(filters);
    this._hiddenAdd(addTweetArea);
    this._hiddenAdd(addTweetPanel);
    this._hiddenAdd(showMore);

    this._tweetFeedView.display([]);
    const tweet = this._tweets.get(id);
    if (tweet) {
      this._tweetView.display(tweet);
    }
  }

  addUser(user) {
    this._users.add(user);
    this.setCurrentUser(user.login);
  }
}
