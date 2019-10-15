'use strict';

const List = require('../lib/list');

describe('Testing our sweet list', () => {
  let testArray = [1, 2, 3];

  const loadList = () => {
    const newList = new List();
    for (let i = 0; i < testArray.length; i++) {
      newList.push(testArray[i]);
    }

    return newList;
  }

  it('Pushed new values into our list', () => {
    let testList1 = loadList();
    expect(testList1.length).toEqual(3);
  });

  it('Map returns a new list', () => {
    let testList2 = loadList();
    let newList2 = testList2.map((val) => {
      return val + 1;
    });

    expect(testList2.length).toEqual(newList2.length);
    expect(testList2.data[0]).not.toBe(newList2.data[0]);
  })
});