/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */

// Class Node
class Node {
  constructor(node = null, value = 0) {
    this.next = node;
    this.value = value;
  }
}

// Class List
class List {
  constructor(value = 0) {
    this.root = new Node(null, value);
  }

  // Methods

  // Add Node after i-position (default - end) with value
  addNode(value, i = null) {
    const toEnd = (i === null);
    let count = 0;
    let currentNode = this.root;
    let isDone = false;

    while (count <= i || toEnd) {
      if (currentNode === null) {
        break;
      }
      if (toEnd && currentNode.next === null) {
        const newNode = new Node(null, value);
        currentNode.next = newNode;
        isDone = true;
        break;
      }
      if (count === i) {
        const newNode = new Node(currentNode.next, value);
        currentNode.next = newNode;
        isDone = true;
        break;
      }
      count++;
      currentNode = currentNode.next;
    }

    return isDone;
  }

  // Remove Node from i-position (default - last). When last Node - return false
  removeNode(i = null) {
    const fromEnd = (i === null);
    let count = 0;
    let currentNode = this.root;
    let isDone = false;

    while (count <= i || fromEnd) {
      if (currentNode === null || currentNode.next === null) {
        break;
      }
      if (fromEnd && currentNode.next.next === null) {
        currentNode.next = null;
        isDone = true;
        break;
      }
      if (count === i) {
        currentNode.value = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        isDone = true;
        break;
      }
      count++;
      currentNode = currentNode.next;
    }

    return isDone;
  }

  // Print all List
  print() {
    let currentNode = this.root;
    let output = '';
    while (currentNode) {
      if (currentNode !== this.root) {
        output += ', ';
      }
      output += currentNode.value;
      currentNode = currentNode.next;
    }
    console.log(output);
  }
}

// Tests
console.log('Создаю список');
const list = new List(0);
list.print();
console.log('Добавляю 1 в конец списка');
list.addNode(1);
list.print();
console.log('Добавляю 2 в конец списка');
list.addNode(2);
list.print();
console.log('Добавляю 10 после 1й позиции списка');
list.addNode(10, 1);
list.print();
console.log('Добавляю 100 после 100й позиции списка');
console.log(list.addNode(100, 100));
list.print();
console.log('Удаляю 2й элемент списка');
list.removeNode(2);
list.print();
console.log('Удаляю 0 элемент списка');
list.removeNode(0);
list.print();
console.log('Удаляю последний элемент списка');
console.log(list.removeNode());
list.print();
console.log('Удаляю последний элемент списка');
console.log(list.removeNode());
list.print();
