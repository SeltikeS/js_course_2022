/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class TweetsController
class TweetsController {
  constructor() {
    this._tweets = [];

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
      this._tweets = res;
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

  addTweet(text) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    const response = this._api.postTweet(token, text);
    response.then(async (res) => {
      if (res.status >= 400) {
        const responseJson = (await (await res).json());
        this._error(responseJson.statusCode, responseJson.message);
      } else {
        this.getFeed();
      }
    });
  }

  editTweet(id, text) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    const response = this._api.putTweet(token, id, text);
    response
      .then(async (res) => {
        if ((await res).status >= 400) {
          const responseJson = (await (await res).json());
          this._error(responseJson.statusCode, responseJson.message);
        } else {
          this.getFeed();
        }
      });
  }

  removeTweet(id) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    const response = this._api.deleteTweet(token, id);
    response
      .then(async (res) => {
        if ((await res).status >= 400) {
          const responseJson = (await (await res).json());
          this._error(responseJson.statusCode, responseJson.message);
        } else {
          this.getFeed();
        }
      });
  }

  addComment(id, text) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    const response = this._api.postComment(token, id, text);
    response
      .then(async (res) => {
        if ((await res).status >= 400) {
          const responseJson = (await (await res).json());
          this._error(responseJson.statusCode, responseJson.message);
        } else {
          this.getFeed();
        }
      });
  }

  showTweet(id = null) {
    const tweet = this._getById(id);
    if (tweet) {
      this._tweetView.display(tweet);
      document.querySelector('.go__home').scrollIntoView(true, { block: 'start' });
    }
  }

  _error(status = '404', text = 'Page not found') {
    const errorPage = document.querySelector('.error');
    const statusError = errorPage.querySelector('.error__status');
    const textError = errorPage.querySelector('.error__text');

    errorPage.classList.remove('hidden');
    statusError.textContent = status;
    textError.textContent = text;
  }

  _getById(id) {
    let tweet = {};
    for (let i = 0; i < this._tweets.length; ++i) {
      if (this._tweets[i].id === id) {
        tweet = this._tweets[i];
        break;
      }
    }
    return tweet;
  }

  _modalClose() {
    const modal = document.querySelector('.modal');

    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }

  _checkUser() {
    const newComment = document.querySelector('.new__comment');
    if (JSON.parse(localStorage.getItem('currentUser')).login === '') {
      this._hiddenAdd(newComment);
    } else {
      this._hiddenRemove(newComment);
    }
  }
}
