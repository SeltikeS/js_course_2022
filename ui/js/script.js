/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class HeaderView
class HeaderView {
  constructor(id) {
    this._containerId = id;
    this._container = document.getElementById(id);
  }

  display(user) {
    const logIn = document.querySelector('.log__in');
    const signUp = document.querySelector('.sign__up');
    const username = document.querySelector('.username');
    const logOut = document.querySelector('.log__out');

    if (!logIn.classList.contains('hidden')) {
      logIn.classList.add('hidden');
    }
    if (!signUp.classList.contains('hidden')) {
      signUp.classList.add('hidden');
    }

    if (username.classList.contains('hidden')) {
      username.classList.remove('hidden');
    }
    if (logOut.classList.contains('hidden')) {
      logOut.classList.remove('hidden');
    }

    username.textContent = user;
  }
}

const tweets = new TweetCollection();
const headerView = new HeaderView('header-id');

function setCurrentUser(user) {
  tweets.user = user;
  headerView.display(user);
}
