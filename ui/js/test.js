/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
console.log('Создаю пустую коллекцию');
const tweetCollection = new TweetCollection([]);
console.log(tweetCollection.getPage(0, 1000));

console.log('Создаю первый твит');
tweetCollection.add('first tweet');
console.log(tweetCollection.getPage(0, 1000));

console.log('Создаю первый коммент');
tweetCollection.addComment('1', 'new comment');
console.log(tweetCollection.getPage(0, 1000));

console.log('Еще несколько твитов');
tweetCollection.add('first tweet');
tweetCollection.user = 'Sam';
tweetCollection.add('first tweet');
tweetCollection.user = 'SeltikeS';
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
tweetCollection.add('first tweet');
console.log(tweetCollection.getPage(0, 1000));

console.log('Этот твит сделал SeltikeS');
console.log(tweetCollection.get('1'));
console.log('Этот твит сделал Sam');
console.log(tweetCollection.get('4'));

console.log('Меняю чужой твит - ожидание FALSE, текст не поменялся');
console.log(tweetCollection.edit('4', 'one tweet #js #DataMola'));
console.log(tweetCollection.get('4'));

console.log('Меняю свой твит - ожидание TRUE, текст поменялся');
console.log(tweetCollection.edit('5', 'one tweet #js #DataMola'));
console.log(tweetCollection.get('5'));

console.log('Вся коллекция твитов перед удалением');
console.log(tweetCollection.getPage(0, 1000));
console.log('Удаляю свой твит - ожидание TRUE');
console.log(tweetCollection.remove('3'));
console.log('Удаляю чужой твит - ожидание FALSE');
console.log(tweetCollection.remove('4'));
console.log('Коллекция уменьшилась на 1 твит');
console.log(tweetCollection.getPage(0, 1000));
tweetCollection.add('first tweet');

console.log('Вывожу все твиты - ожидание 20 твитов');
console.log(tweetCollection.getPage(0, 1000));
console.log('Вывожу без параметров - ожидание 10 последних твитов');
console.log(tweetCollection.getPage());
console.log('Пропускаю 16 твитов, вывожу 5. Ожидание - 4 первых твита');
console.log(tweetCollection.getPage(16, 5));
console.log('Вывожу все твиты Sam - ожидание 1 твит');
console.log(tweetCollection.getPage(0, 1000, { author: 'Sam' }));
console.log('Вывожу все твиты со словом one - ожидание 1 твит');
console.log(tweetCollection.getPage(0, 1000, { text: 'one' }));
console.log('Вывожу все твиты с тэгами #js #data - ожидание 1 твит');
console.log(tweetCollection.getPage(0, 1000, { hashtags: ['js', 'data'] }));

console.log('Добавляю 2 твита через addAll');
tweetCollection.addAll([
  new Tweet(tweetCollection.id.next(), '11111111', tweetCollection.user),
  new Tweet(tweetCollection.id.next(), '22222222', tweetCollection.user),
]);
console.log(tweetCollection.getPage(0, 1000));

console.log('Очищаю коллекцию');
console.log(tweetCollection);
console.log('Очищено');
tweetCollection.clear();
console.log(tweetCollection.getPage(0, 1000));
console.log(tweetCollection);

// Делаю массив с коллекцией объектов
console.log('// --------------------------------------------------------------');
console.log('Создаю новую TweetCollection с разными комментами, авторами и датами');

const tweets = [{
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

const tweetsTweet = tweets.map((tw) => {
  const newTweet = new Tweet(
    ++count,
    tw.text,
    tw.author,
    tw.createdAt,
  );

  for (let i = 0; i < tw.comments.length; ++i) {
    newTweet._comments.push(new Comment(
      ++count,
      tw.comments[i].text,
      tw.comments[i].author,
      tw.comments[i].createdAt,
    ));
  }

  return newTweet;
});

const newTweetCollection = new TweetCollection(tweetsTweet, count);

console.log(newTweetCollection);
