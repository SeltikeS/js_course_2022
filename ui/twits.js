;const tweet = (function() {

    // Prototypes and variables
    let user = 'SeltikeS';
 
    const idCnt = { id: 0 };

    // Tweet array
    const tweets = [{
        id: String(++idCnt.id),
        text: "It's my first tweet",
        createdAt: new Date("2021-12-12T22:02:02"),
        author: "SeltikeS",
        comments: []
    }, {
        id: String(++idCnt.id),
        text: "Happy New Year!!! #newyear",
        createdAt: new Date("2021-12-31T23:59:00"),
        author: "SeltikeS",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: "OMG, it was crazy",
        createdAt: new Date("2022-01-01T12:00:00"),
        author: "Dora",
        comments: [{ 
            id: String(++idCnt.id),
            text: "Yeeee",
            createdAt: new Date("2022-01-01T13:00:00"),
            author: "Kira" 
        }]  
    }, {
        id: String(++idCnt.id),
        text: "Hello, world #js",
        createdAt: new Date("2022-01-01T18:10:00"),
        author: "SeltikeS",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: "Привет! #js #datamola",
        createdAt: new Date("2022-01-10T10:10:00"),
        author: "user123",
        comments: [{ 
            id: String(++idCnt.id),
            text: "Hi",
            createdAt: new Date("2022-01-10T11:10:00"),
            author: "SeltikeS" 
        }, { 
            id: String(++idCnt.id),
            text: "=)",
            createdAt: new Date("2022-01-10T13:10:00"),
            author: "user123" 
        },]  
    }, {
        id: String(++idCnt.id),
        text: 'Netflix Buys Another Game Studio To Create "World Class" Games #netflix',
        createdAt: new Date("2022-03-02T14:08:00"),
        author: "Eddie Makuch",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Pokemon Scarlet And Violet Preorders Are Live #pokemon',
        createdAt: new Date("2022-03-02T15:26:00"),
        author: "Brendan Hesse",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Apex Legends Is Now Playable On Steam Deck #apex #steamdeck',
        createdAt: new Date("2022-03-02T17:53:00"),
        author: "Demi Williams",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Elden Ring Has A Massive Start In The UK #eldenring',
        createdAt: new Date("2022-03-03T14:18:00"),
        author: "George Yang",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Wrath Of The Lich King Classic Could Be In The Works #wow',
        createdAt: new Date("2022-03-03T16:44:00"),
        author: "Cameron Koch",
        comments: [{ 
            id: String(++idCnt.id),
            text: "Wait it",
            createdAt: new Date("2022-03-03T20:00:00"),
            author: "SeltikeS" 
        }]  
    }, {
        id: String(++idCnt.id),
        text: 'Free Guy Sequels Are Coming #freeguys',
        createdAt: new Date("2022-03-03T16:57:00"),
        author: "Eddie Makuch",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Disney Plus Adding Ad-Supported Version In US Later This Year #disney',
        createdAt: new Date("2022-03-04T09:03:00"),
        author: "David Wolinsky",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Microsoft Is Ceasing All "New Sales" In Russia #microsoft',
        createdAt: new Date("2022-03-04T10:30:00"),
        author: "Cameron Koch",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Russian Version Of New World No Longer In The Works #newworld',
        createdAt: new Date("2022-03-04T14:28:00"),
        author: "Cameron Koch",
        comments: [{ 
            id: String(++idCnt.id),
            text: "Плак плак",
            createdAt: new Date("2022-03-04T20:20:00"),
            author: "Yammy" 
        }]  
    }, {
        id: String(++idCnt.id),
        text: 'Elden Ring May Be Getting A PVP Arena DLC #eldenring',
        createdAt: new Date("2022-03-07T18:08:00"),
        author: "Demi Williams",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: "Marvel's Guardians Of The Galaxy Did Not Meet Square Enix's Expectations #marvel #squareenix",
        createdAt: new Date("2022-03-07T21:21:00"),
        author: "Eddie Makuch",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: "Lego Star Wars: The Skywalker Saga DLC Includes The Mandalorian And Young Lando #lego #starwars",
        createdAt: new Date("2022-03-07T23:28:00"),
        author: "Darryn Bonthuys",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Next Pokemon TCG Expansion Revolves Around Pokemon Legends: Arceus #pokemon',
        createdAt: new Date("2022-03-08T14:07:00"),
        author: "Brendan Hesse",
        comments: []  
    }, {
        id: String(++idCnt.id),
        text: 'Elden Ring Speedrunner Beats Game In Less Than Three Hours #eldenring',
        createdAt: new Date("2022-03-08T21:06:00"),
        author: "Gabe Gurwin",
        comments: [{ 
            id: String(++idCnt.id),
            text: "Wow. So fast",
            createdAt: new Date("2022-03-08T23:06:00"),
            author: "Dora" 
        }]  
    }, {
        id: String(++idCnt.id),
        text: 'Homework deadline is comming #js #datamola',
        createdAt: new Date("2022-03-10T09:06:00"),
        author: "SeltikeS",
        comments: [{ 
            id: String(++idCnt.id),
            text: "+++++++",
            createdAt: new Date("2022-03-10T12:31:00"),
            author: "Dora" 
        }]  
    }]; 


    // Template methods
    function filterConfigCheck(filt, tw) {
        if(filt.author && !tw.author.toLowerCase().includes(filt.author.toLowerCase()) ||
        filt.dateTo < tw.createdAt || 
        filt.dateFrom > tw.createdAt ||
        filt.text && !tw.text.toLowerCase().includes(filt.text.toLowerCase())) {
            return false;
        }
        if(filt.hashtags) {
            for(tag of filt.hashtags) {
                if(!tw.text.toLowerCase().includes(tag.toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    }

    // Tweet methods
    function getTweets(
        skip = 0, 
        top = 10, 
        filterConfig = {
            author: null,
            dateFrom: null,
            dateTo: new Date(),
            hashtags: null,
            text: ""
    }) {
        const out = [];
        let skipCnt = skip;
        let topCnt = top;

        for(let i = tweets.length - 1; i >= 0; --i) {
            if(filterConfigCheck(filterConfig, tweets[i])) {
                if(skipCnt) {
                    skipCnt--;
                    continue;
                }
                if(topCnt) {
                    out.push(tweets[i]);
                    topCnt--;
                } else {
                    break;
                }
            }
            
        }
        
        return out;
    }

    function getTweet(id) {
        return tweets.find(tweet => validateTweet(tweet) && tweet.id === id);
    }  

    function validateTweet(tw) {
        if(tw &&
           typeof(tw.id) === 'string' && 
           typeof(tw.text) === 'string' && 
           typeof(tw.createdAt) === 'object' && 
           typeof(tw.author) === 'string' && 
           typeof(tw.comments) === 'object') {
            return true;
        }
        return false;
    }

    function addTweet(text) {
        if(text) {
            const newTweet = Object.create(idCnt, {
                id: {
                    value: String(++idCnt.id),
                    enumerable: true
                },
                text: {
                    value: String(text),
                    enumerable: true,
                    writable: true
                },
                createdAt: {
                    value: new Date(),
                    enumerable: true,
                },
                author: {
                    value: String(user),
                    enumerable: true
                },
                comments: {
                    value: [],
                    enumerable: true,
                    writable: true
                }
            });
    
            if(validateTweet(newTweet)) { 
                tweets.push(newTweet);
                return true;
            }
        }
        return false;
    }

    function editTweet(id, text) {
        const tw = getTweet(id);
        if(validateTweet(tw) && tw.author === user) {
            tw.text = text;
            return true;
        }
        return false;
    }

    function removeTweet(id) {  
        const index = tweets.findIndex(tweet => validateTweet(tweet) && 
                                                tweet.author === user &&
                                                tweet.id === id);
        if(index >= 0) {
            tweets.splice(index, 1);
            return true;
        }
        return false;
    }

    function validateComment(com) {
        if(com &&
           typeof(com.id) === 'string' && 
           typeof(com.text) === 'string' && 
           typeof(com.createdAt) === 'object' && 
           typeof(com.author) === 'string') {
            return true;
        }
        return false;
    }

    function addComment(id, text) {
        if(id && text) {
            const newComment = Object.create(idCnt, {
                id: {
                    value: String(++idCnt.id),
                    enumerable: true
                },
                text: {
                    value: String(text),
                    enumerable: true,
                    writable: true
                },
                createdAt: {
                    value: new Date(),
                    enumerable: true,
                },
                author: {
                    value: String(user),
                    enumerable: true
                }
            })
    
            if(validateComment(newComment)) {
                for(let i = 0; i < tweets.length; ++i) {
                    if(validateTweet(tweets[i]) && tweets[i].id === id) {
                        tweets[i].comments.push(newComment);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function changeUser(usr) {
        user = usr;
    }

    return {
        user, 
        getTweets, 
        getTweet, 
        validateTweet, 
        addTweet, 
        editTweet,
        removeTweet,
        validateComment,
        addComment,
        changeUser
    }

}());

// Class Counter
class Counter {
    constructor() {
        this._counter = 0;
    }

    next() {
        return String(++this._counter);
    }

    reset() {
        this._counter = 0;
    }
}

// Class TweetCollection
class TweetCollection {
    constructor(tws) {
        this._tweets = tws;
    }

    _user = 'SeltikeS';
    
    get _user() {
        return this._user;
    }
    set _user(newUser = 'SeltikeS') {
        this._user = newUser;
    }
    _id = new Counter();

    static filterConfigCheck(filt, tw) {
        if(filt.author && !tw._author.toLowerCase().includes(filt.author.toLowerCase()) ||
        filt.dateTo < tw._createdAt || 
        filt.dateFrom > tw._createdAt ||
        filt.text && !tw._text.toLowerCase().includes(filt.text.toLowerCase())) {
            return false;
        }
        if(filt.hashtags) {
            for(let i = 0; i < filt.hashtags.length; ++i) {
                if(!tw._text.toLowerCase().includes(filt.hashtags[i].toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    }

    getPage(
        skip = 0, 
        top = 10, 
        filterConfig = {
            author: null,
            dateFrom: null,
            dateTo: new Date(),
            hashtags: null,
            text: ""
    }) {
        const out = [];
        let skipCnt = skip;
        let topCnt = top;

        for(let i = this._tweets.length - 1; i >= 0; --i) {
            if(TweetCollection.filterConfigCheck(filterConfig, this._tweets[i])) {
                if(skipCnt) {
                    skipCnt--;
                    continue;
                }
                if(topCnt) {
                    out.push(this._tweets[i]);
                    topCnt--;
                } else {
                    break;
                }
            }
            
        }
        
        return out;
    }

    get(id) {
        return this._tweets.find(tweet => Tweet.validate(tweet) && tweet.id === id);
    } 

    add(text) {
        if(text) {
            const newTweet = new Tweet(this._id.next(), text, this._user);
            if(Tweet.validate(newTweet)) {
                this._tweets.push(newTweet);
                return true;
            }
        }
        return false;
    }

    edit(id, text) {
        const tw = this.get(id);
        if(Tweet.validate(tw) && tw._author === this._user) {
            tw._text = text;
            return true;
        }
        return false;
    }

    remove(id) {
        const index = this._tweets.findIndex(tweet => Tweet.validate(tweet) && 
                                                tweet._author === this._user &&
                                                tweet._id === id);
        if(index >= 0) {
            this._tweets.splice(index, 1);
            return true;
        }
        return false;
    }

    addAll(tws) {
        tws.forEach(element => {
            if(Tweet.validate(element)) {
                this._tweets.push(element);
            }
        }); 
    }

    clear() {
        this._tweets = [];
    }
}

// Class Comment
class Comment {
    constructor(id, text, author) {
        this._id = id;
        this._text = text;
        this._createdAt = new Date();
        this._author = author;
    }

    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get author() {
        return this._author;
    }

    static validate(com) {
        if(com &&
           typeof(com._id) === 'string' && 
           typeof(com._text) === 'string' && 
           typeof(com._createdAt) === 'object' && 
           typeof(com._author) === 'string') {
            return true;
        }
        return false;
    }
}

// Class Tweet
class Tweet extends Comment {
    constructor(id, text, author) {
        super(id, text, author);
        this._comments = [];
    }

    static validate(tw) {
        if(tw &&
           typeof(tw._id) === 'string' && 
           typeof(tw._text) === 'string' && 
           typeof(tw._createdAt) === 'object' && 
           typeof(tw._author) === 'string' && 
           typeof(tw._comments) === 'object') {
            return true;
        }
        return false;
    }

    addComment(id, text) {
        if(id && text) {
            const newComment = new Comment(id, text, this._author);
            if(Comment.validate(newComment)) {
                this._comments.push(newComment);
                return true;
            }
        }
        return false;
    }
}



const tweetCollection = new TweetCollection([]);
tweetCollection.add('first tweet');
tweetCollection._tweets[0].addComment(tweetCollection._id.next(), 'new comment');
tweetCollection.add('first tweet');
tweetCollection._user = 'Sam';
tweetCollection.add('first tweet');
tweetCollection._user = 'SeltikeS';
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
console.log(tweetCollection.getPage(0, 1000, {author: 'Sam'}));
console.log(tweetCollection.getPage(0, 1000, {text: 'third'}));
console.log(tweetCollection.getPage(0, 1000, {hashtags: ['js', 'data']}));

tweetCollection.addAll([
    new Tweet(tweetCollection._id.next(), '11111111', tweetCollection._user), 
    new Tweet(tweetCollection._id.next(), '22222222', tweetCollection._user)
]);
console.log(tweetCollection.getPage(0, 1000));

tweetCollection.clear();
console.log(tweetCollection);







