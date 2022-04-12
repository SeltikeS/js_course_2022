/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class TweetView
class TweetView {
  constructor(id) {
    this._containerId = id;
    this._container = document.getElementById(id);
  }

  display(tw) {
    const username = this._container.querySelector('.username');
    const date = this._container.querySelector('.date');
    const text = this._container.querySelector('.tweet-text');
    const comments = this._container.querySelector('.comments__container');

    let str = '';

    this._container.classList.remove('hidden');

    this._container.dataset.id = tw.id;
    username.textContent = tw.author;
    date.textContent = `${TweetFeedView.addZero(tw.createdAt.getHours())}:${TweetFeedView.addZero(tw.createdAt.getMinutes())} ${TweetFeedView.addZero(tw.createdAt.getDate())}.${TweetFeedView.addZero(tw.createdAt.getMonth() + 1)}.${tw.createdAt.getFullYear()}`;
    text.textContent = tw.text;

    // Для каждого коммента рисую его тело
    tw._comments.forEach((com) => {
      str += `<div class="single__comment"  data-id="${com.id}">
          <h3 class="comment__username">${com.author}</h3>
          <h3 class="date">${TweetFeedView.addZero(com.createdAt.getHours())}:${TweetFeedView.addZero(com.createdAt.getMinutes())} ${TweetFeedView.addZero(com.createdAt.getDate())}.${TweetFeedView.addZero(com.createdAt.getMonth() + 1)}.${com.createdAt.getFullYear()}</h3>
          <p class="comment__text">
              ${com.text}
          </p>
      </div>`;
    });

    comments.innerHTML = str;
  }
}
