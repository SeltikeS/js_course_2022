/* eslint-disable no-console */
/* eslint-disable no-undef */
const tweetCollection = new TweetCollection([]);
tweetCollection.add('first tweet');
tweetCollection.tweets[0].addComment(tweetCollection.id.next(), 'new comment');
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

console.log(tweetCollection.get('1'));
console.log(tweetCollection.get('3'));

console.log(tweetCollection.edit('3', 'third tweet #js #DataMola'));
console.log(tweetCollection.edit('4', 'third tweet'));
console.log(tweetCollection.get('3'));

console.log(tweetCollection);
console.log(tweetCollection.remove('4'));
console.log(tweetCollection.remove('5'));
console.log(tweetCollection);
tweetCollection.add('first tweet');

console.log(tweetCollection.getPage(0, 1000));
console.log(tweetCollection.getPage(10, 5));
console.log(tweetCollection.getPage(0, 1000, { author: 'Sam' }));
console.log(tweetCollection.getPage(0, 1000, { text: 'third' }));
console.log(tweetCollection.getPage(0, 1000, { hashtags: ['js', 'data'] }));

tweetCollection.addAll([
  new Tweet(tweetCollection.id.next(), '11111111', tweetCollection.user),
  new Tweet(tweetCollection.id.next(), '22222222', tweetCollection.user),
]);
console.log(tweetCollection.getPage(0, 1000));

tweetCollection.clear();
console.log(tweetCollection);
