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
    let str = '';
    // Отрисовываю тело твита
    str += `<article class="go__home">
        <a class="go__home__ref" href="#">
            <span class="iconify" data-icon="ant-design:home-filled"></span>
        </a>
    </article>
    <article class="twit"  data-id="${tw.id}">
                <div class="twit__ref">
                    <div class="twit__content">
                        <div class="twit__header">
                            <div>
                                <h2 class="username">${tw.author}</h2>
                                <h3 class="date">${TweetFeedView.addZero(tw.createdAt.getHours())}:${TweetFeedView.addZero(tw.createdAt.getMinutes())} ${TweetFeedView.addZero(tw.createdAt.getDate())}.${TweetFeedView.addZero(tw.createdAt.getMonth() + 1)}.${tw.createdAt.getFullYear()}</h3>
                            </div>`;

    str += `<div class="twit__icons">
                                <button class="edit__twit">
                                    <span class="iconify" data-icon="system-uicons:pen"></span>
                                </button>
                                <button class="delete__twit">
                                    <span class="iconify" data-icon="akar-icons:cross"></span>
                                </button>
                            </div>`;

    str += `</div>
      <p>
        ${tw.text}
      </p>
    <div class="comments">`;

    str += `<div class="delete__modal hidden">
      <div class="delete__buttons">
        <button class="delete__button delete__button__cancel">Cancel</button>
        <button class="delete__button delete__button__delete">Delete</button>
      </div>
    </div>`;
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

    str += `<form class="new__comment" action="">
                <textarea class="new__comment__input" placeholder="Leave new comment..." wrap="soft"></textarea>
                <input class="new__comment__button" type="submit" value="submit">
            </form>
          </div>
        </div>
      </div> 
    </article>`;

    this._container.innerHTML = str;
  }
}
