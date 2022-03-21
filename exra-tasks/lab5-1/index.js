/* eslint-disable no-plusplus */
// Class Node
// eslint-disable-next-line max-classes-per-file
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

  // Add Node to i-position (default = 0) with value
  addNode(value, i = 0) {
    let currentNode = this.root;
    let isDone = false;
    if (value !== undefined) {
      if (i === 0) {
        this.root = new Node(currentNode, value);
        return true;
      }
      for (let index = i; index >= 0; --index) {
        if (currentNode === null) {
          break;
        }
        if (index === 1) {
          const nextNode = currentNode.next;
          currentNode.next = new Node(nextNode, value);
          isDone = true;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    return isDone;
  }

  // Remove Node from i-position (default = 0). When last Node - return false
  removeNode(i = 0) {
    let currentNode = this.root;
    let isDone = false;
    for (let index = i; index >= 0; --index) {
      if (currentNode === null) {
        break;
      }
      if (index === 0) {
        const nextNode = currentNode.next;
        if (nextNode !== null) {
          currentNode.next = nextNode.next;
          currentNode.value = nextNode.value;
          isDone = true;
          break;
        }
      }
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
console.log('Добавляю 10 на 1ю позицию списка');
list.addNode(10, 1);
list.print();
console.log('Удаляю 2й элемент списка');
list.removeNode(2);
list.print();
console.log('Удаляю последний элемент списка');
list.removeNode();
list.print();
console.log('Удаляю последний элемент списка');
list.removeNode();
list.print();
console.log('Удаляю последний элемент списка');
list.removeNode();
list.print();
