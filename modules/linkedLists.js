import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);
    newNode.nextNode = null;

    if (this.head === null) {
      this.tail = this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = null;

    if (this.head === null) {
      this.tail = this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  toString() {
    let resultString = "";

    let currentNode = this.head;

    while (currentNode !== null) {
      resultString += `( ${currentNode.value} ) --> `;
      currentNode = currentNode.nextNode;
    }
    resultString += "null";
    console.log(resultString);
  }
}

let ll = new LinkedList();

ll.prepend(3);
ll.prepend(99);
ll.append(100);
ll.toString();
