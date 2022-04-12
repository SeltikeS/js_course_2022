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
    this._tweetView = new TweetView('tweet-view-id');
    this._loginButton = document.querySelector('.input__button__login');
    this._signupButton = document.querySelector('.input__button__signup');
    this.setCurrentUser(this._tweets.user);
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

  _hideIfHasntUser(item) {
    if (this._tweets.user === ''
    && !item.classList.contains('hidden')) {
      item.classList.add('hidden');
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

    if (user !== '') {
      this._tweets.user = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._headerView.display(this._tweets.user);
      this._viewIfHasUser(addTweetArea);
      this._viewIfHasUser(addTweetPanel);
      this.getFeed();
    }
    if (user === '') {
      this._tweets.user = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._headerView.hide(this._tweets.user);
      this._hideIfHasntUser(addTweetArea);
      this._hideIfHasntUser(addTweetPanel);
      this.getFeed();
    }
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
    const tweet = this._tweets.get(id);
    if (tweet) {
      this._tweetView.display(tweet);
    }
  }

  _addUser(user) {
    const isOk = this._users.add(user);
    if (isOk) {
      this.setCurrentUser(user.login);
    }
    return isOk;
  }

  _loginUser(user) {
    const isOk = this._users.login(user);
    if (isOk) {
      this.setCurrentUser(user.login);
    }
    return isOk;
  }

  _modalClose() {
    const modal = document.querySelector('.modal');

    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }

  _checkUser() {
    const newComment = document.querySelector('.new__comment');
    if (this._tweets.user === '') {
      addHidden(newComment);
    } else {
      removeHidden(newComment);
    }
  }

  login(e) {
    e.preventDefault();

    const form = document.forms.autorization;
    const username = form.username;
    const pass = form.pass;
    const error = form.querySelector('.input__errors');

    username.style.border = '1px solid var(--black-color)';
    pass.style.border = '1px solid var(--black-color)';

    if (!username.value) {
      username.style.border = '2px solid var(--red-color)';
      error.classList.remove('hidden');
      error.textContent = '*Empty username';
    } else if (!pass.value) {
      pass.style.border = '2px solid var(--red-color)';
      error.classList.remove('hidden');
      error.textContent = '*Empty password';
    } else {
      const newUser = {
        login: username.value,
        pass: pass.value,
      };
      const isExist = tweetsController._users.isExist(newUser);
      if (!isExist) {
        username.style.border = '2px solid var(--red-color)';
        error.classList.remove('hidden');
        error.textContent = '*Incorrect username';
      } else {
        const isLogin = tweetsController._users.login(newUser);
        if (!isLogin) {
          pass.style.border = '2px solid var(--red-color)';
          error.classList.remove('hidden');
          error.textContent = '*Incorrect password';
        } else {
          tweetsController._loginUser(newUser);
          tweetsController._modalClose();
          tweetsController._checkUser();
        }
      }
    }
  }

  signup(e) {
    e.preventDefault();

    const form = document.forms.autorization;
    const username = form.username;
    const pass = form.pass;
    const repeate = form.repeate;
    const error = form.querySelector('.input__errors');

    username.style.border = '1px solid var(--black-color)';
    pass.style.border = '1px solid var(--black-color)';
    repeate.style.border = '1px solid var(--black-color)';

    if (!username.value) {
      username.style.border = '2px solid var(--red-color)';
      error.classList.remove('hidden');
      error.textContent = '*Empty username';
    } else if (!pass.value) {
      pass.style.border = '2px solid var(--red-color)';
      error.classList.remove('hidden');
      error.textContent = '*Empty password';
    } else if (!repeate.value) {
      repeate.style.border = '2px solid var(--red-color)';
      error.classList.remove('hidden');
      error.textContent = '*Empty repeate password';
    } else if (pass.value !== repeate.value) {
      pass.style.border = '2px solid var(--red-color)';
      repeate.style.border = '2px solid var(--red-color)';
      error.textContent = '*Different passwords entered';
    } else {
      const newUser = {
        login: username.value,
        pass: pass.value,
      };
      const isExist = tweetsController._users.isExist(newUser);
      if (isExist) {
        username.style.border = '2px solid var(--red-color)';
        error.classList.remove('hidden');
        error.textContent = '*Username is already exist';
      } else {
        tweetsController._addUser(newUser);
        tweetsController._modalClose();
        tweetsController._checkUser();
      }
    }
  }
}
