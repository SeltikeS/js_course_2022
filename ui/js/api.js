/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// TweetFeedApiServise class
class TweetFeedApiService {
  constructor(url) {
    this._url = url;
  }

  async registerUser(login, password) {
    const message = {
      login: `${login}`,
      password: `${password}`,
    };
    const request = new Request(`${this._url}registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }

  async loginUser(login, password) {
    const message = {
      login: `${login}`,
      password: `${password}`,
    };
    const request = new Request(`${this._url}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }

  async postTweet(token, text) {
    const message = {
      text: `${text}`,
    };
    const request = new Request(`${this._url}tweet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(message),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }

  async putTweet(token, id, text) {
    const message = {
      text: `${text}`,
    };
    const request = new Request(`${this._url}tweet/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(message),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }

  async deleteTweet(token, id) {
    const request = new Request(`${this._url}tweet/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const requestResult = await fetch(request);
    return requestResult;
  }

  async postComment(token, id, text) {
    const message = {
      text: `${text}`,
    };
    const request = new Request(`${this._url}tweet/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(message),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }

  async getTweet(from = 0, count = 10, filters = {
    author: '',
    dateFrom: '1970-01-01T00:00:00.001Z',
    dateTo: `${new Date()}`,
    hashtags: [],
    text: '',
  }) {
    const query = {
      author: '',
      text: '',
      dateFrom: '1970-01-01T00:00:00.001Z',
      dateTo: `${new Date()}`,
      from: 0,
      count: 10,
      hashtags: '',
    };
    query.author = (filters.author) ? filters.author : '';
    query.text = (filters.text) ? filters.text : '';
    query.dateFrom = (filters.dateFrom) ? filters.dateFrom : '1970-01-01T00:00:00.001Z';
    query.dateTo = (filters.dateTo) ? filters.dateTo : `${new Date()}`;
    query.from = (from) || 0;
    query.count = (count) || 10;
    query.hashtags = (filters.hashtags === []
                      || filters.hashtags === null)
      ? filters.hashtags.join(',')
      : '';

    const request = new Request(`${this._url}tweet`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      query: JSON.stringify(query),
    });
    const requestResult = (await (await fetch(request)).json());
    return requestResult;
  }
}
