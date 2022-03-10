;const tweetModul = (function() {

    // Prototypes and variables
    let user = 'SeltikeS';
    const tweets = [];  


    const tweet = { id: 0 };
    const commment = { id: 0 };
    


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

    function addTweet(newText) {
        tweets.push(Object.create(tweet, {
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
        }));
    }

    function changeUser(usr) {
        user = usr;
    }

    // Add tweets


    for(let i = 0; i < 20; ++i) {
        addTweet('Write text');
    }

    addTweet('A bc d #js #datamola');


    

    console.log(tweets);
    console.log(getTweets(3, 6));

    console.log(getTweets(0, 30, {hashtags: '#js'}));


        
}());





