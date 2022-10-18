# linked_lists

Implementation of linked lists in Javascript part of The Odin Project

Node factory function containing a value function and a link to the nextNode null by default.

LinkedList factory function.


getHeadNode() - function that returns the first node in the list

getTailNode() - function that returns the last node in the list

getSize() - function that returns the total number of nodes in the list

append(value)  - function that adds a new node containing value to the end of the list

prepend(value) - function that adds a new node containing value to the start of the list

at(index) - function that returns the node at the given index

pop() - function that removes the last element from the list

contains(value) - function that returns true if the passed in value is in the list and otherwise returns false.

find(value) - function that returns the index of the node containing value, or null if not found.

toString() - function that represents LinkedList objects as strings, so they can be printed out and previewed in the console. The format is: ( value ) -> ( value ) -> ( value ) -> null

insertAt(value, index) - function that inserts a new node with the provided value at the given index.

removeAt(index) - function that removes the node at the given index.
