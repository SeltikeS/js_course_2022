/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class TweetFeedView
class TweetFeedView {
  constructor(id) {
    this._containerId = id;
    this._container = document.getElementById(id);
  }

  // Добавляет 0 к числу, если однозначное. Метод для красивого отображения даты
  static addZero(num) {
    if (num < '10') {
      return `0${num}`;
    }
    return num;
  }

  static greyHashtags(text) {
    const array = text.split(' ');
    const newArray = array.map((word) => {
      if (word.includes('#')) {
        return `<span class="hashtags">${word}</span>`;
      }
      return word;
    });
    return newArray.join(' ');
  }

  // Принимает массив твитов. Выводит их на экран
  display(tws) {
    let str = '';

    tws.forEach((tw) => {
      const tweetCode = `<article class="twit"  data-id="${tw.id}">
                          <div class="twit__ref">
                              <div class="twit__content">
                                  <div class="twit__header">
                                      <div>
                                          <h2 class="username">${tw.author}</h2>
                                          <h3 class="date">${TweetFeedView.addZero(tw.createdAt.getHours())}:${TweetFeedView.addZero(tw.createdAt.getMinutes())} ${TweetFeedView.addZero(tw.createdAt.getDate())}.${TweetFeedView.addZero(tw.createdAt.getMonth() + 1)}.${tw.createdAt.getFullYear()}</h3>
                                      </div>
                                  </div>
                                  <p>
                                    ${TweetFeedView.greyHashtags(tw.text)}
                                  </p>
                                  <h3 class="comments">Comments: ${tw._comments.length}</h3>
                              </div>
                          </div>
                          <div class="twit__edit__modal hidden">
                            <textarea class="twit__edit__textarea">${tw.text}</textarea>
                            <div class="twit__edit__buttons">
                              <button class="twit__edit__button twit__edit__apply">Apply</button>
                              <button class="twit__edit__button twit__edit__cancel">Cancel</button>
                            </div>
                          </div> 
                      </article>`;
      str += tweetCode;
    });

    this._container.innerHTML = str;
  }
}
