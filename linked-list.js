#!/usr/bin/env node

// Node constructor with input value and nextNode inititally null
const Node = (value) => {
  const nextNode = null;
  return { value, nextNode };
};

// Linked list constructor
const LinkedList = () => {
  let headNode = null;
  let size = 0;

  // Function to get the head node
  const getHeadNode = () => headNode;

  // Function to get the tail node
  const getTailNode = () => {
    if (size === 0) {
      return null;
    }
    let tempNode = headNode;
    while (tempNode.nextNode !== null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  };

  // Function to get the size of the linked list (2 elements --> size = 2)
  const getSize = () => size;

  // Function to add a new node containing value to the end of the list
  const append = (value) => {
    const newNode = Node(value);
    size += 1;

    if (headNode === null) {
      headNode = newNode;
    } else {
      let tempNode = headNode;
      while (tempNode.nextNode !== null) {
        tempNode = tempNode.nextNode;
      }
      tempNode.nextNode = newNode;
    }
  };

  // Function to add a new node containing value to the start of the list
  const prepend = (value) => {
    const newNode = Node(value);
    size += 1;

    if (headNode === null) {
      headNode = newNode;
    } else {
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  };

  // Function to return the node at the given index
  const at = (index) => {
    if (size === 0) {
      return null;
    }
    if (index >= size) {
      return null;
    }
    let tempNode = headNode;
    for (let i = 0; i < index; i += 1) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  };

  // Function to remove the last element of the list
  const pop = () => {
    if (size === 0) {
      return null;
    }
    size -= 1;
    let lastNode = headNode;
    let beforeLastNode = null;
    while (lastNode.nextNode != null) {
      beforeLastNode = lastNode;
      lastNode = lastNode.nextNode;
    }
    beforeLastNode.nextNode = null;
    return lastNode;
  };

  // Function that returns true if the passed in value is in the list and otherwise returns false.
  const contains = (value) => {
    if (size === 0) {
      return false;
    }
    let tempNode = headNode;
    while (tempNode.nextNode !== null && tempNode.value !== value) {
      tempNode = tempNode.nextNode;
    }
    if (tempNode.value === value) {
      return true;
    }
    return false;
  };

  // Function that returns the index of the node containing value, or null if not found.
  const find = (value) => {
    if (size === 0) {
      return null;
    }
    let index = 0;
    let tempNode = headNode;
    while (tempNode.nextNode !== null && tempNode.value !== value) {
      tempNode = tempNode.nextNode;
      index += 1;
    }
    if (tempNode.value === value) {
      return index;
    }
    return null;
  };

  // Function that represents LinkedList objects as strings, so you they can be printed out
  // and previewed in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    if (size === 0) {
      return null;
    }
    let tempNode = headNode;
    let outputString = `( ${tempNode.value} ) -> `;
    while (tempNode.nextNode !== null) {
      tempNode = tempNode.nextNode;
      outputString = outputString.concat(`( ${tempNode.value} ) -> `);
    }
    return outputString.concat("null");
  };

  // Function that that inserts a new node with the provided value at the given index.
  const insertAt = (value, index) => {
    if ((size === 0 && index !== 0) || (size > 0 && index >= size)) {
      return null;
    }
    const newNode = Node(value);
    if (index === 0) {
      newNode.nextNode = headNode;
      headNode = newNode;
    } else {
      const previousNode = at(index - 1);
      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
    }
    size += 1;
    return newNode;
  };

  // Function that removes the node at the given index.
  const removeAt = (index) => {
    if (size === 0 || index >= size || index < 0) {
      return null;
    }

    if (index === 0) {
      headNode = headNode.nextNode;
    } else {
      const previousNode = at(index - 1);
      previousNode.nextNode = previousNode.nextNode.nextNode;
    }
    size -= 1;
    return headNode;
  };

  return {
    getHeadNode,
    getTailNode,
    getSize,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const newList = LinkedList();
newList.append(24);
newList.append(25);
newList.prepend(23);
console.log(newList.getHeadNode());
console.log(newList.getTailNode());
console.log(newList.getSize());
console.log(newList.at(1));
console.log(newList.contains(24));
console.log(newList.contains(27));
console.log(newList.find(24));
console.log(newList.find(27));
console.log(newList.toString());
newList.insertAt(20, 2);
console.log(newList.toString());
newList.removeAt(1);
console.log(newList.toString());
