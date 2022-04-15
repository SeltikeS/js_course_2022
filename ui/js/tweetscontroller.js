/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class TweetsController
class TweetsController {
  constructor() {
    this._headerView = new HeaderView('header-id');
    this._tweetFeedView = new TweetFeedView('tweet-feed-id');
    this._filterView = new FilterView('filter-id');
    this._tweetView = new TweetView('tweet-view-id');

    this._api = new TweetFeedApiService('https://jslabapi.datamola.com/');

    this._loginButton = document.querySelector('.input__button__login');
    this._signupButton = document.querySelector('.input__button__signup');

    this.setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
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
    if (JSON.parse(localStorage.getItem('currentUser')) !== ''
    && item.classList.contains('hidden')) {
      item.classList.remove('hidden');
    }
  }

  _hideIfHasntUser(item) {
    if (JSON.parse(localStorage.getItem('currentUser')) === ''
    && !item.classList.contains('hidden')) {
      item.classList.add('hidden');
    }
  }

  // Methods
  async getFeed(skip, top, filterConfig) {
    const filters = document.querySelector('.filters');
    const addTweetArea = document.querySelector('.add__tweet');
    const addTweetPanel = document.querySelector('.panel__add');
    const showMore = document.querySelector('.show__more');

    this._hiddenRemove(filters);
    this._hiddenRemove(showMore);

    const tweetFeed = (await this._api.getTweet(skip, top, filterConfig)).json();
    this._filterView.display(filterConfig);
    this._viewIfHasUser(addTweetArea);
    this._viewIfHasUser(addTweetPanel);
    tweetFeed.then((res) => {
      this._tweetFeedView.display(res);
    });
  }

  setCurrentUser(user) {
    const addTweetArea = document.querySelector('.add__tweet');
    const addTweetPanel = document.querySelector('.panel__add');

    if (user.login !== '') {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._headerView.display(user.login);
      this._viewIfHasUser(addTweetArea);
      this._viewIfHasUser(addTweetPanel);
      this.getFeed();
    }
    if (user.login === '') {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._headerView.hide(user.login);
      this._hideIfHasntUser(addTweetArea);
      this._hideIfHasntUser(addTweetPanel);
      this.getFeed();
    }
  }

  // addTweet(text) {
  //   this._tweets.add(text);
  //   this.getFeed();
  // }

  // editTweet(id, text) {
  //   this._tweets.edit(id, text);
  //   this.getFeed();
  // }

  // removeTweet(id) {
  //   this._tweets.remove(id);
  //   this.getFeed();
  // }

  // showTweet(id = null) {
  //   const tweet = this._tweets.get(id);
  //   if (tweet) {
  //     this._tweetView.display(tweet);
  //   }
  // }

  _modalClose() {
    const modal = document.querySelector('.modal');

    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }

  _checkUser() {
    const newComment = document.querySelector('.new__comment');
    if (JSON.parse(localStorage.getItem('currentUser')) === '') {
      addHidden(newComment);
    } else {
      removeHidden(newComment);
    }
  }
}
