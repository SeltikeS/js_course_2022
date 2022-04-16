/* eslint-disable object-shorthand */
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
    const requestResult = await fetch(request);
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
    const requestResult = await fetch(request);
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
    const requestResult = await fetch(request);
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
    const requestResult = await fetch(request);
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
    const requestResult = await fetch(request);
    return requestResult;
  }

  async getTweet(from = 0, count = 10, filters = {
    author: '',
    dateFrom: `${new Date(0)}`,
    dateTo: `${new Date()}`,
    hashtags: [],
    text: '',
  }) {
    let query = '?';

    if (filters.author) {
      query += `author=${filters.author}&`;
    }
    if (filters.text) {
      query += `text=${filters.text}&`;
    }
    if (filters.hashtags && (filters.hashtags.length !== 0)) {
      query += `hashtags=${filters.hashtags.join(',')}&`;
    }
    if (filters.dateFrom) {
      query += `dateFrom=${(new Date(filters.dateFrom)).toISOString()}&`;
    }
    if (filters.dateTo) {
      query += `dateTo=${(new Date(filters.dateTo)).toISOString()}&`;
    }

    query += `from=${from}&count=${count}`;


    const request = new Request(`${this._url}tweet${query}`, {
      method: 'GET',
    });


    const requestResult = await fetch(request);
    return requestResult;
  }
}
