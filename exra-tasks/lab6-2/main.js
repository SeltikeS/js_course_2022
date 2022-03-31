/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const container = document.querySelector('.container');

// Class Node
class Node {
  constructor(value = 0, node = null) {
    this.value = value;
    this.children = node;
  }
}

function createUl(list) {
  let str = '';
  str += '<ul>';
  if (list) {
    list.forEach((node) => {
      str += `<li>
        ${node.value}`;
      if (node.children) {
        str += createUl(node.children);
      }
      str += '</li>';
    });
  }
  str += '</ul>';
  return str;
}

function createList(title, list) {
  let str = '';
  if (title) {
    str += `<h2>${title}</h2>`;
  }
  if (list) {
    str += createUl(list);
  }
  container.innerHTML = str;
}

const newTitle = 'Лист';
const newList = [
  new Node('Пункт 1.', null),
  new Node('Пункт 2.', [
    new Node('Подпункт 2.1.', null),
    new Node('Подпункт 2.2.', [
      new Node('Подпункт 2.2.1.', null),
      new Node('Подпункт 2.2.2.', null),
    ]),
    new Node('Подпункт 2.3.', null),
  ]),
  new Node('Пункт 3.', null),
];

createList(newTitle, newList);
