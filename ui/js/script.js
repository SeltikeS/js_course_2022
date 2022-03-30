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

const tweets = new TweetCollection(tweetsTweet, count);
const headerView = new HeaderView('header-id');
const tweetFeedView = new TweetFeedView('tweet-feed-id');
const filterView = new FilterView('filter-id');

function setCurrentUser(user) {
  tweets.user = user;
  headerView.display(tweets.user);
}

function getFeed(skip, top, filterConfig) {
  const tweetFeed = tweets.getPage(skip, top, filterConfig);
  filterView.display(filterConfig);
  tweetFeedView.display(tweetFeed);
}

function addTweet(text) {
  tweets.add(text);
  getFeed(0, 10);
}

function editTweet(id, text) {
  tweets.edit(id, text);
  getFeed(0, 10);
}

function removeTweet(id) {
  tweets.remove(id);
  getFeed(0, 10);
}
