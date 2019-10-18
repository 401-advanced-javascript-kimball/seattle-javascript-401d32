# Week 1 Review Project

## This is an UNGRADED pair programming assignment.  Please take the next 45 minutes to complete the following tasks in a directory called `week1.project`:

1) Create a Class called `SentenceParser` that has the following properties:

   a) `this.words`: an array of words from a string passed into the constructor.

2) The class should have a method called `write` that writes `this.words` as a sentence string to a file located in a directory called `data`.

   a) This should use the node `fs` module.

3) A class method called `replace` that takes in two arguments: `find` and `replace` which searches the array of words and swaps the word in `this.words` equaling `find` with the word supplied as `replace`.

   a) This method should return a promise.

   b) The promise should `resolve` with the new words concatenated as a string.

   c) The promise shuold `reject` an error if no word is found.

4) This module should be executed by running a node terminal command and use a terminal command argument to save words to the `senctenceParser` instance.

You may use whatever directory structure you want, and you may any available resources to complete the requirements.
