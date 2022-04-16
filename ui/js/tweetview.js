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
    document.querySelector('.go__home').scrollIntoView(true, { block: 'start' });

    let str = '';

    this._container.classList.remove('hidden');

    this._container.dataset.id = tw.id;
    username.textContent = tw.author;
    date.textContent = `${TweetFeedView.addZero((new Date(tw.createdAt)).getHours())}:${TweetFeedView.addZero((new Date(tw.createdAt)).getMinutes())} ${TweetFeedView.addZero((new Date(tw.createdAt)).getDate())}.${TweetFeedView.addZero((new Date(tw.createdAt)).getMonth() + 1)}.${(new Date(tw.createdAt)).getFullYear()}`;
    text.textContent = tw.text;

    // Для каждого коммента рисую его тело
    tw.comments.forEach((com) => {
      str += `<div class="single__comment"  data-id="${com.id}">
          <h3 class="comment__username">${com.author}</h3>
          <h3 class="date">${TweetFeedView.addZero((new Date(com.createdAt)).getHours())}:${TweetFeedView.addZero((new Date(com.createdAt)).getMinutes())} ${TweetFeedView.addZero((new Date(com.createdAt)).getDate())}.${TweetFeedView.addZero((new Date(com.createdAt)).getMonth() + 1)}.${(new Date(com.createdAt)).getFullYear()}</h3>
          <p class="comment__text">
              ${com.text}
          </p>
      </div>`;
    });

    comments.innerHTML = str;
  }
}
