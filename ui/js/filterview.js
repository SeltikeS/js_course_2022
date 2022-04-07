/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Class FilterView
class FilterView {
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

  // Принимает объект с конфигами. Отображает конфиги на экране
  display(filterConfig = {
    author: null,
    dateFrom: null,
    dateTo: null,
    hashtags: null,
    text: '',
  }) {
    let str = '';

    if (filterConfig.author && filterConfig.author !== null) {
      str += `<div class="filter__line">
      <span class="filter__line__property">Author&nbsp;</span> <span class="active__filter">${filterConfig.author}</span>
      </div>`;
    }
    if ((filterConfig.dateFrom && filterConfig.dateFrom !== null)
          || (filterConfig.dateTo && filterConfig.dateTo !== null)) {
      const dateFromDate = filterConfig.dateFrom;
      const dateToDate = filterConfig.dateTo;

      let dateFromStr = 'Begin';
      let dateToStr = 'Now';

      if (!dateFromDate) {
        dateFromStr = '<div class="active__filter">Begin</div>';
      } else {
        dateFromStr = `<div class="active__filter">${FilterView.addZero(new Date(filterConfig.dateFrom).getDate())}.${FilterView.addZero(new Date(filterConfig.dateFrom).getMonth() + 1)}.${new Date(filterConfig.dateFrom).getFullYear()}</div>`;
      }

      if (!dateToDate) {
        dateToStr = '<div class="active__filter">Now</div>';
      } else {
        dateToStr = `<div class="active__filter">${FilterView.addZero(new Date(filterConfig.dateTo).getDate())}.${FilterView.addZero(new Date(filterConfig.dateTo).getMonth() + 1)}.${new Date(filterConfig.dateTo).getFullYear()}</div>`;
      }

      str += `<div class="filter__line">
      <span class="filter__line__property">Date&nbsp;</span> ${dateFromStr}&nbsp; - &nbsp;${dateToStr}
      </div>`;
    }
    if (filterConfig.hashtags
        && filterConfig.hashtags !== null) {
      str += `<div class="filter__line">
      <span class="filter__line__property">Hashtags&nbsp</span>`;
      filterConfig.hashtags.forEach((hashtag) => {
        str += `<span class="active__filter">#${hashtag}&nbsp;</span> `;
      });
      str += '</div>';
    }
    if (filterConfig.text && filterConfig.text !== null) {
      str += `<div class="filter__line">
        <span class="filter__line__property">Text&nbsp;</span>
        <div class="active__filter">${filterConfig.text}</div>
      </div>`;
    }
    this._container.innerHTML = str;
  }
}
