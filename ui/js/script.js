/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

const createKeyIfEmpty = (key) => {
  if (!localStorage.getItem(`${key}`)) {
    localStorage.setItem(`${key}`, JSON.stringify({
      login: '',
      token: '',
    }));
  }
};

// If LocalStorage hasn't tweets or users create empty array
createKeyIfEmpty('currentUser');

// Create controller
const tweetsController = new TweetsController();

// Support functions
function removeHidden(item) {
  if (item.classList.contains('hidden')) {
    item.classList.remove('hidden');
  }
}
function addHidden(item) {
  if (!item.classList.contains('hidden')) {
    item.classList.add('hidden');
  }
}

function parseDate(date) {
  if (date && date !== '') {
    const array = date.split('.');
    array.reverse();
    const parsed = `${array.join('-')}T00:00:00`;
    return parsed;
  }
  return '';
}

// ------CALLBACK---FUNCTIONS------

// Open login window
function loginOpen(e) {
  const modal = document.querySelector('.modal');
  const modalLogin = modal.querySelector('.modal__login');
  const modalSignup = modal.querySelector('.modal__signup');
  const inputLogin = modal.querySelector('.input__button__login');
  const inputSignup = modal.querySelector('.input__button__signup');
  const goSignup = modal.querySelector('.form__button__signup');
  const goLogin = modal.querySelector('.form__button__login');

  const form = document.forms.autorization;
  const username = form.username;
  const pass = form.pass;
  const repeate = form.repeate;
  const error = form.querySelector('.input__errors');

  username.value = '';
  pass.value = '';
  repeate.value = '';
  username.style.border = '1px solid var(--black-color)';
  pass.style.border = '1px solid var(--black-color)';
  repeate.style.border = '1px solid var(--black-color)';
  addHidden(error);

  e.preventDefault();

  removeHidden(modal);
  removeHidden(inputLogin);
  removeHidden(goSignup);
  addHidden(repeate);
  addHidden(inputSignup);
  addHidden(goLogin);

  if (modalLogin.classList.contains('modal__grey')) {
    modalLogin.classList.remove('modal__grey');
  }
  if (!modalLogin.classList.contains('modal__active')) {
    modalLogin.classList.add('modal__active');
  }

  if (!modalSignup.classList.contains('modal__grey')) {
    modalSignup.classList.add('modal__grey');
  }
  if (modalSignup.classList.contains('modal__active')) {
    modalSignup.classList.remove('modal__active');
  }

  modalLogin.removeEventListener('click', loginOpen);
  goLogin.removeEventListener('click', loginOpen);
  modalSignup.addEventListener('click', signupOpen);
  goSignup.addEventListener('click', signupOpen);
}

// Open signup window
function signupOpen(e) {
  const modal = document.querySelector('.modal');
  const modalLogin = modal.querySelector('.modal__login');
  const modalSignup = modal.querySelector('.modal__signup');
  const inputLogin = modal.querySelector('.input__button__login');
  const inputSignup = modal.querySelector('.input__button__signup');
  const goSignup = modal.querySelector('.form__button__signup');
  const goLogin = modal.querySelector('.form__button__login');

  const form = document.forms.autorization;
  const username = form.username;
  const pass = form.pass;
  const repeate = form.repeate;
  const error = form.querySelector('.input__errors');

  username.value = '';
  pass.value = '';
  repeate.value = '';
  username.style.border = '1px solid var(--black-color)';
  pass.style.border = '1px solid var(--black-color)';
  repeate.style.border = '1px solid var(--black-color)';
  addHidden(error);

  e.preventDefault();

  removeHidden(modal);
  addHidden(inputLogin);
  addHidden(goSignup);
  removeHidden(repeate);
  removeHidden(inputSignup);
  removeHidden(goLogin);

  if (modalSignup.classList.contains('modal__grey')) {
    modalSignup.classList.remove('modal__grey');
  }
  if (!modalSignup.classList.contains('modal__active')) {
    modalSignup.classList.add('modal__active');
  }

  if (!modalLogin.classList.contains('modal__grey')) {
    modalLogin.classList.add('modal__grey');
  }
  if (modalLogin.classList.contains('modal__active')) {
    modalLogin.classList.remove('modal__active');
  }

  modalSignup.removeEventListener('click', signupOpen);
  goSignup.removeEventListener('click', signupOpen);
  modalLogin.addEventListener('click', loginOpen);
  goLogin.addEventListener('click', loginOpen);
}

// Open filters
function arrowOpen() {
  const form = document.querySelector('.filters__form');
  const filters = document.querySelector('.filters__space');

  form.classList.remove('hidden');
  filters.classList.add('hidden');

  this.classList.remove('arrow__down');
  this.classList.add('arrow__up');

  this.removeEventListener('click', arrowOpen);
  this.addEventListener('click', arrowClose);

  const tweetFeed = document.getElementById('tweet-feed-id');
  tweetFeed.addEventListener('click', getTweet);
}

// Close filters
function arrowClose() {
  const form = document.querySelector('.filters__form');
  const filters = document.querySelector('.filters__space');

  form.classList.add('hidden');
  filters.classList.remove('hidden');

  this.classList.add('arrow__down');
  this.classList.remove('arrow__up');

  this.removeEventListener('click', arrowClose);
  this.addEventListener('click', arrowOpen);

  const tweetFeed = document.getElementById('tweet-feed-id');
  tweetFeed.addEventListener('click', getTweet);
}

// Get new tweet feed if have filter
function filtersInputs() {
  const form = document.forms.filters;
  const author = form.author.value;
  const datefrom = parseDate(form.datefrom.value);
  const dateto = parseDate(form.dateto.value);
  const text = form.text.value;
  const tags = form.tags.value.split(' ').map((tag) => ((tag[0] === '#') ? tag.slice(1) : tag));

  const filters = {};
  if (author && author !== '') {
    filters.author = author;
  }
  if (datefrom && datefrom !== '') {
    filters.dateFrom = datefrom;
  }
  if (dateto && dateto !== '') {
    filters.dateTo = dateto;
  }
  if (text && text !== '') {
    filters.text = text;
  }
  if (tags && tags !== [] && tags !== ['']) {
    filters.hashtags = tags;
    filters.hashtags = filters.hashtags.filter((e) => (e !== ''));
    if (filters.hashtags.length === 0) {
      delete filters.hashtags;
    }
  }

  tweetsController.getFeed(0, 10, filters);
  const tweetFeed = document.getElementById('tweet-feed-id');
  tweetFeed.addEventListener('click', getTweet);
}

// Clear all button
function clearInputs() {
  const filterInputs = document.forms.filters;
  filterInputs.author.value = '';
  filterInputs.datefrom.value = '';
  filterInputs.dateto.value = '';
  filterInputs.text.value = '';
  filterInputs.tags.value = '';
  tweetsController.getFeed();
}

// Log out user
function logOutUser() {
  tweetsController.setCurrentUser({
    login: '',
    token: '',
  });
}

// Get tweet by id
function getTweet(e) {
  const editTweetButton = document.querySelector('.edit__twit');
  const deleteTweetButton = document.querySelector('.delete__twit');
  const tweet = e.target.closest('.twit');
  const id = tweet.dataset.id;

  tweetsController.showTweet(`${id}`);

  if (JSON.parse(localStorage.getItem('currentUser')).login !== tweetsController._getById(id).author) {
    addHidden(editTweetButton);
    addHidden(deleteTweetButton);
  } else {
    removeHidden(editTweetButton);
    removeHidden(deleteTweetButton);
  }

  checkUser();
}

function checkUser() {
  const newComment = document.querySelector('.new__comment');

  if (JSON.parse(localStorage.getItem('currentUser')).login === '') {
    addHidden(newComment);
  } else {
    removeHidden(newComment);
  }
}

function modalClose() {
  const modal = document.querySelector('.modal');

  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
}

// Main page
function mainPage() {
  const tweetFeed = document.getElementById('tweet-feed-id');

  tweetsController.getFeed();
  tweetFeed.addEventListener('click', getTweet);
}

// Go home page
function goHomePage() {
  const tweetView = document.querySelector('.tweet-view');
  tweetView.classList.add('hidden');
  tweetsController.getFeed();
}

// New tweet
function addNewTweet(e) {
  e.preventDefault();

  const newTweetTextarea = document.querySelector('.add__tweet__textarea');
  if (newTweetTextarea.value !== '') {
    tweetsController.addTweet(`${newTweetTextarea.value}`);
    newTweetTextarea.value = '';
  }
}

// Show more
function showMoreTweets() {
  const tweets = document.querySelectorAll('.twit');
  const form = document.forms.filters;
  const author = form.author.value;
  const datefrom = parseDate(form.datefrom.value);
  const dateto = parseDate(form.dateto.value);
  const text = form.text.value;
  const tags = form.tags.value.split(' ').map((tag) => ((tag[0] === '#') ? tag.slice(1) : tag));

  const filters = {};
  if (author && author !== '') {
    filters.author = author;
  }
  if (datefrom && datefrom !== '') {
    filters.dateFrom = datefrom;
  }
  if (dateto && dateto !== '') {
    filters.dateTo = dateto;
  }
  if (text && text !== '') {
    filters.text = text;
  }
  if (tags && tags !== [] && tags !== ['']) {
    filters.hashtags = tags;
    filters.hashtags = filters.hashtags.filter((e) => (e !== ''));
    if (filters.hashtags.length === 0) {
      delete filters.hashtags;
    }
  }

  tweetsController.getFeed(0, tweets.length + 9, filters);
}

// DeleteTweet
function deleteTweet() {
  const modal = document.querySelector('.delete__modal');
  modal.classList.remove('hidden');
}

function deleteModalCancel() {
  const modal = document.querySelector('.delete__modal');
  modal.classList.add('hidden');
}

function deleteModalDelete() {
  const tweetId = document.querySelector('.twit').dataset.id;

  tweetsController.removeTweet(`${tweetId}`);

  deleteModalCancel();
  goHomePage();
}

function editTweet() {
  const modal = document.querySelector('.edit__modal');
  const tweetView = document.querySelector('.tweet-view');
  const tweetText = tweetView.querySelector('.tweet-text').textContent;
  const tweetTextarea = tweetView.querySelector('.edit__textarea');

  tweetTextarea.value = tweetText;
  modal.classList.remove('hidden');
}

function editModalCancel() {
  const modal = document.querySelector('.edit__modal');
  modal.classList.add('hidden');
}

function editModalEdit() {
  const tweetView = document.querySelector('.tweet-view');
  const tweetId = document.querySelector('.twit').dataset.id;
  const tweetTextarea = tweetView.querySelector('.edit__textarea');

  tweetsController.editTweet(`${tweetId}`, tweetTextarea.value);
  tweetsController.showTweet(`${tweetId}`);
  editModalCancel();
  goHomePage();
}

function addNewComment(e) {
  e.preventDefault();

  const tweetView = document.querySelector('.tweet-view');
  const commentTextarea = tweetView.querySelector('.new__comment__input');
  const tweetId = tweetView.dataset.id;

  if (commentTextarea.value) {
    tweetsController.addComment(`${tweetId}`, commentTextarea.value);
    commentTextarea.value = '';
    tweetsController.showTweet(`${tweetId}`);
    goHomePage();
  }
}

function login(e) {
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
      token: '',
    };

    const loginUser = tweetsController._api.loginUser(username.value, pass.value);
    loginUser
      .then(async (res) => {
        if ((await res).status >= 400) {
          username.style.border = '2px solid var(--red-color)';
          pass.style.border = '2px solid var(--red-color)';
          error.classList.remove('hidden');
          error.textContent = '*Wrong login or pass';
        } else {
          newUser.token = (await (await res).json()).token;
          tweetsController.setCurrentUser(newUser);
          tweetsController._modalClose();
          tweetsController._checkUser();
        }
      });
  }
}

function signup(e) {
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
    error.classList.remove('hidden');
    error.textContent = '*Different passwords entered';
  } else {
    const signupUser = tweetsController._api.registerUser(username.value, pass.value);
    signupUser
      .then(async (res) => {
        if ((await res).status >= 400) {
          username.style.border = '2px solid var(--red-color)';
          pass.style.border = '2px solid var(--red-color)';
          repeate.style.border = '2px solid var(--red-color)';
          error.classList.remove('hidden');
          error.textContent = '*User already exist';
        } else {
          const newUser = {
            login: username.value,
            token: '',
          };
          const loginUser = tweetsController._api.loginUser(username.value, pass.value);
          loginUser
            .then(async (logRes) => {
              newUser.token = (await (await logRes).json()).token;
              tweetsController.setCurrentUser(newUser);
              tweetsController._modalClose();
              tweetsController._checkUser();
            });
          tweetsController._modalClose();
          tweetsController._checkUser();
        }
      });
  }
}

// Error close
function errorClose() {
  const errorPage = document.querySelector('.error');
  errorPage.classList.add('hidden');

  tweetsController.getFeed();
}

// ------EVENT---LISTENERS------

// Login and signup
const goLogIn = document.querySelector('.log__in');
const goSignUp = document.querySelector('.sign__up');
const panelLogin = document.querySelector('.panel__item__login');
const goHome = document.querySelector('.signup__home');
const panelHome = document.querySelector('.panel__item__home');
const homeFromTweet = document.querySelector('.go__home');

goLogIn.addEventListener('click', loginOpen);
panelLogin.addEventListener('click', loginOpen);
goSignUp.addEventListener('click', signupOpen);
goHome.addEventListener('click', modalClose);
panelHome.addEventListener('click', modalClose);
homeFromTweet.addEventListener('click', goHomePage);

// Login and Signup
tweetsController._loginButton.addEventListener('click', login);
tweetsController._signupButton.addEventListener('click', signup);

// Logout
const logout = document.querySelector('.log__out');
logout.addEventListener('click', logOutUser);

// Filters
const arrow = document.querySelector('.arrow');
const clearAll = document.querySelector('.filters__reset');
const filters = document.forms.filters;
arrow.addEventListener('click', arrowOpen);
filters.addEventListener('input', filtersInputs);
clearAll.addEventListener('click', clearInputs);

// Add tweet

const addTweet = document.querySelector('.add__tweet__button');
addTweet.addEventListener('click', addNewTweet);

// Show more
const showMore = document.querySelector('.show__more__button');
showMore.addEventListener('click', showMoreTweets);

// Delete tweet
const deleteButton = document.querySelector('.delete__twit');
const deleteCancel = document.querySelector('.delete__button__cancel');
const deleteDelete = document.querySelector('.delete__button__delete');

deleteButton.addEventListener('click', deleteTweet);
deleteCancel.addEventListener('click', deleteModalCancel);
deleteDelete.addEventListener('click', deleteModalDelete);

// Edit tweet
const editButton = document.querySelector('.edit__twit');
const editCancel = document.querySelector('.edit__button__cancel');
const editEdit = document.querySelector('.edit__button__edit');

editButton.addEventListener('click', editTweet);
editCancel.addEventListener('click', editModalCancel);
editEdit.addEventListener('click', editModalEdit);

// Add comment
const newCommentButton = document.querySelector('.new__comment__button');
newCommentButton.addEventListener('click', addNewComment);

// Error button
const errorButton = document.querySelector('.error__button');
errorButton.addEventListener('click', errorClose);

// Show main page when start
mainPage();
