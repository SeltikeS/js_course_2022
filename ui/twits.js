;const tweetModul = (function() {

    // Prototypes and variables
    let user = 'SeltikeS';
    const tweets = [];  


    const tweet = { id: 0 };
    const comment = { id: 0 };
    


    // Tweet functions

    function getTweets(skip = 0, top = 10, filterConfig = {
        author: null,
        dateFrom: null,
        dateTo: new Date(),
        hashtags: null,
        text: ""
    }) {
        const out = [];
        let skipCnt = skip;
        let topCnt = top;

        function filterConfigCheck(filt, tw) {

            if((filt.author) && (filt.author !== tw.author)) {
                return false;
            }
            if((filt.dateTo < tw.createdAt) || (filt.dateFrom > tw.createdAt)) {
                return false;
            }            
            if((filt.hashtags) && (!tw.text.includes(filt.hashtags))) {
                return false;
            }
            if((filt.text) && (!tw.text.includes(filt.text))) {
                return false;
            }

            return true;
        }

        for(let i = 0; i < tweets.length; ++i) {
            if(skipCnt) {
                skipCnt--;
                continue;
            }

            if(topCnt) {
                if(filterConfigCheck(filterConfig, tweets[i])) {
                    out.push(tweets[i]);
                }
                topCnt--;
            } else {
                break;
            }
        }

        return out;
    }

    function getTweet(id) {
        for(let i = 0; i < tweets.length; ++i) {
            if(tweets[i].id === id) {
                return tweets[i];
            }
        }
        return undefined;
    }  

    function validateTweet(tw) {
        if(typeof(tw.id) === 'string' && 
           typeof(tw.text) === 'string' && 
           typeof(tw.createdAt) === 'object' && 
           typeof(tw.author) === 'string' && 
           typeof(tw.comments) === 'object') {
            return true;
        }
        return false;
    }

    function addTweet(newText) {
        const newTweet = Object.create(tweet, {
            id: {
                value: String(++tweet.id),
                enumerable: true
            },
            text: {
                value: String(newText),
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
        for(let i = 0; i < tweets.length; ++i) {
            if(tweets[i].id === id) {
                tweets.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    function validateComment(com) {
        if(typeof(com.id) === 'string' && 
           typeof(com.text) === 'string' && 
           typeof(com.createdAt) === 'object' && 
           typeof(com.author) === 'string') {
            return true;
        }
        return false;
    }

    function addComment(id, text) {
        const newComment = Object.create(comment, {
            id: {
                value: String(++comment.id),
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
        return false;
    }

    function changeUser(usr) {
        user = usr;
    }

    // Check results


    for(let i = 0; i < 20; ++i) {
        addTweet('Write text');
    }

    addTweet('A bc d #js #datamola');

    // Check addTweet and getTweets
    console.log(tweets);
    console.log(getTweets(3, 6));

    // Check filterConfig
    console.log(getTweets(0, 30, {author: 'SeltikeS'}));
    console.log(getTweets(0, 30, {text: 't'}));
    console.log(getTweets(0, 30, {hashtags: '#js'}));
    console.log(getTweets(0, 30, {dateFrom: null}));
    console.log(getTweets(0, 30, {dateTo: new Date()}));

    // Check validateTweet
    console.log(validateTweet(tweets[0]));

    // Check addTweet
    console.log(addTweet('Write text'));

    // Check editTweet
    console.log(editTweet('22', 'New text'));
    console.log(tweets);

    // Check removeTweet
    console.log(removeTweet('22'));
    console.log(tweets);

    // Check addComment
    console.log(addComment('1', 'new comment'));
    console.log(tweets);

}());





