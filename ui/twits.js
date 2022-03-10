;(function() {



    // Tweet functions

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
            autor: {
                value: String(user),
                enumerable: true
            },
            comments: {
                value: new Array(),
                enumerable: true,
                writable: true
            }
        }));
    }

    // Add tweets

    addTweet('Write text');
    addTweet('Write text');

    console.log(tweets);
    

    // Prototypes and Variables

    const tweets = new Array();
    
    const tweet = new Object({ id: 0 });
    const commment = new Object({ id: 0 });
    const user = 'SeltikeS';
    

}());