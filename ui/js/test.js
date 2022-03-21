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
console.log(tweetCollection.get('3'));

console.log('Меняю чужой твит - ожидание FALSE, текст не поменялся');
console.log(tweetCollection.edit('3', 'one tweet #js #DataMola'));
console.log(tweetCollection.get('3'));

console.log('Меняю свой твит - ожидание TRUE, текст поменялся');
console.log(tweetCollection.edit('4', 'one tweet #js #DataMola'));
console.log(tweetCollection.get('4'));

console.log('Вся коллекция твитов перед удалением');
console.log(tweetCollection.getPage(0, 1000));
console.log('Удаляю свой твит - ожидание TRUE');
console.log(tweetCollection.remove('2'));
console.log('Удаляю чужой твит - ожидание FALSE');
console.log(tweetCollection.remove('3'));
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
tweetCollection.clear();
console.log(tweetCollection.getPage(0, 1000));
console.log(tweetCollection);
