/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Test tweet collection
const tweetObjects = [{
  id: String(0),
  text: "It's my first tweet",
  createdAt: new Date('2021-12-12T22:02:02'),
  author: 'SeltikeS',
  comments: [],
}, {
  id: String(1),
  text: 'Happy New Year!!! #newyear',
  createdAt: new Date('2021-12-31T23:59:00'),
  author: 'SeltikeS',
  comments: [],
}, {
  id: String(2),
  text: 'OMG, it was crazy',
  createdAt: new Date('2022-01-01T12:00:00'),
  author: 'Dora',
  comments: [{
    id: String(3),
    text: 'Yeeee',
    createdAt: new Date('2022-01-01T13:00:00'),
    author: 'Kira',
  }],
}, {
  id: String(4),
  text: 'Hello, world #js',
  createdAt: new Date('2022-01-01T18:10:00'),
  author: 'SeltikeS',
  comments: [],
}, {
  id: String(5),
  text: 'Привет! #js #datamola',
  createdAt: new Date('2022-01-10T10:10:00'),
  author: 'user123',
  comments: [{
    id: String(6),
    text: 'Hi',
    createdAt: new Date('2022-01-10T11:10:00'),
    author: 'SeltikeS',
  }, {
    id: String(7),
    text: '=)',
    createdAt: new Date('2022-01-10T13:10:00'),
    author: 'user123',
  }],
}, {
  id: String(8),
  text: 'Netflix Buys Another Game Studio To Create "World Class" Games #netflix',
  createdAt: new Date('2022-03-02T14:08:00'),
  author: 'Eddie Makuch',
  comments: [],
}, {
  id: String(9),
  text: 'Pokemon Scarlet And Violet Preorders Are Live #pokemon',
  createdAt: new Date('2022-03-02T15:26:00'),
  author: 'Brendan Hesse',
  comments: [],
}, {
  id: String(10),
  text: 'Apex Legends Is Now Playable On Steam Deck #apex #steamdeck',
  createdAt: new Date('2022-03-02T17:53:00'),
  author: 'Demi Williams',
  comments: [],
}, {
  id: String(11),
  text: 'Elden Ring Has A Massive Start In The UK #eldenring',
  createdAt: new Date('2022-03-03T14:18:00'),
  author: 'George Yang',
  comments: [],
}, {
  id: String(12),
  text: 'Wrath Of The Lich King Classic Could Be In The Works #wow',
  createdAt: new Date('2022-03-03T16:44:00'),
  author: 'Cameron Koch',
  comments: [{
    id: String(13),
    text: 'Wait it',
    createdAt: new Date('2022-03-03T20:00:00'),
    author: 'SeltikeS',
  }],
}, {
  id: String(14),
  text: 'Free Guy Sequels Are Coming #freeguys',
  createdAt: new Date('2022-03-03T16:57:00'),
  author: 'Eddie Makuch',
  comments: [],
}, {
  id: String(15),
  text: 'Disney Plus Adding Ad-Supported Version In US Later This Year #disney',
  createdAt: new Date('2022-03-04T09:03:00'),
  author: 'David Wolinsky',
  comments: [],
}, {
  id: String(16),
  text: 'Microsoft Is Ceasing All "New Sales" In Russia #microsoft',
  createdAt: new Date('2022-03-04T10:30:00'),
  author: 'Cameron Koch',
  comments: [],
}, {
  id: String(17),
  text: 'Russian Version Of New World No Longer In The Works #newworld',
  createdAt: new Date('2022-03-04T14:28:00'),
  author: 'Cameron Koch',
  comments: [{
    id: String(18),
    text: 'Плак плак',
    createdAt: new Date('2022-03-04T20:20:00'),
    author: 'Yammy',
  }],
}, {
  id: String(19),
  text: 'Elden Ring May Be Getting A PVP Arena DLC #eldenring',
  createdAt: new Date('2022-03-07T18:08:00'),
  author: 'Demi Williams',
  comments: [],
}, {
  id: String(20),
  text: "Marvel's Guardians Of The Galaxy Did Not Meet Square Enix's Expectations #marvel #squareenix",
  createdAt: new Date('2022-03-07T21:21:00'),
  author: 'Eddie Makuch',
  comments: [],
}, {
  id: String(21),
  text: 'Lego Star Wars: The Skywalker Saga DLC Includes The Mandalorian And Young Lando #lego #starwars',
  createdAt: new Date('2022-03-07T23:28:00'),
  author: 'Darryn Bonthuys',
  comments: [],
}, {
  id: String(22),
  text: 'Next Pokemon TCG Expansion Revolves Around Pokemon Legends: Arceus #pokemon',
  createdAt: new Date('2022-03-08T14:07:00'),
  author: 'Brendan Hesse',
  comments: [],
}, {
  id: String(23),
  text: 'Elden Ring Speedrunner Beats Game In Less Than Three Hours #eldenring',
  createdAt: new Date('2022-03-08T21:06:00'),
  author: 'Gabe Gurwin',
  comments: [{
    id: String(24),
    text: 'Wow. So fast',
    createdAt: new Date('2022-03-08T23:06:00'),
    author: 'Dora',
  }],
}, {
  id: String(25),
  text: 'Homework deadline is comming #js #datamola',
  createdAt: new Date('2022-03-10T09:06:00'),
  author: 'SeltikeS',
  comments: [{
    id: String(26),
    text: '+++++++',
    createdAt: new Date('2022-03-10T12:31:00'),
    author: 'Dora',
  }],
}];
let count = 0;
const tweetsTweet = tweetObjects.map((tw) => {
  const newTweet = new Tweet(
    String(++count),
    tw.text,
    tw.author,
    tw.createdAt,
  );

  tw.comments.forEach((element) => {
    newTweet._comments.push(new Comment(
      String(++count),
      element.text,
      element.author,
      element.createdAt,
    ));
  });

  return newTweet;
});

const createKeyIfEmpty = (key) => {
  if (!localStorage.getItem(`${key}`)) {
    localStorage.setItem(`${key}`, JSON.stringify([]));
  }
};

// If LocalStorage hasn't tweets or users create empty array
createKeyIfEmpty('tweets');
createKeyIfEmpty('users');

localStorage.setItem('tweets', JSON.stringify(tweetsTweet));

// Create controller
const tweetsController = new TweetsController();
tweetsController.getFeed();

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

  const login = document.querySelector('.input__button__login');
  const signup = document.querySelector('.input__button__signup');
  login.addEventListener('click', loginUser);
  signup.removeEventListener('click', createUser);

  username.value = '';
  pass.value = '';
  repeate.value = '';
  username.style.border = 'none';
  pass.style.border = 'none';
  repeate.style.border = 'none';
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

  const login = document.querySelector('.input__button__login');
  const signup = document.querySelector('.input__button__signup');
  login.removeEventListener('click', loginUser);
  signup.addEventListener('click', createUser);

  username.value = '';
  pass.value = '';
  repeate.value = '';
  username.style.border = 'none';
  pass.style.border = 'none';
  repeate.style.border = 'none';
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

// Close login or signup window
function modalClose() {
  const modal = document.querySelector('.modal');

  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
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

// Create new user
function createUser(e) {
  e.preventDefault();

  const form = document.forms.autorization;
  const username = form.username;
  const pass = form.pass;
  const repeate = form.repeate;
  const error = form.querySelector('.input__errors');

  username.style.border = 'none';
  pass.style.border = 'none';
  repeate.style.border = 'none';

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
      tweetsController.addUser(newUser);
      modalClose();
    }
  }
}

// Log in as user
function loginUser(e) {
  e.preventDefault();

  const form = document.forms.autorization;
  const username = form.username;
  const pass = form.pass;
  const error = form.querySelector('.input__errors');

  username.style.border = 'none';
  pass.style.border = 'none';
  repeate.style.border = 'none';

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
        tweetsController.login(newUser);
        modalClose();
      }
    }
  }
}

function logOutUser() {
  tweetsController.setCurrentUser('');
}

// ------EVENT---LISTENERS------

// Login and signup
const goLogIn = document.querySelector('.log__in');
const goSignUp = document.querySelector('.sign__up');
const panelLogin = document.querySelector('.panel__item__login');
const goHome = document.querySelector('.signup__home');
const panelHome = document.querySelector('.panel__item__home');

goLogIn.addEventListener('click', loginOpen);
panelLogin.addEventListener('click', loginOpen);
goSignUp.addEventListener('click', signupOpen);
goHome.addEventListener('click', modalClose);
panelHome.addEventListener('click', modalClose);

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
