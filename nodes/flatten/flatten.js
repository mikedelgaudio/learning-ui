// Create a native function that flattens a deeply nested array

const flatten = (array) => {
  return array.reduce((acc, elem) => {
    // const arr = [2, 3, [5, 7], [1], [3, [0, [9]]]];
    // acc = undefined, elem = 2, acc = 2
    // acc = 2, elem = 3, acc = 2,3
    // acc = 2,3, elem = 5,7, acc = (recurse wait)
    // acc = undefined, elem = 5, acc = 5
    // acc = 5, elem = 7, acc = 5,7
    // (recurse finished) acc = 2,3,5,7
    // acc = 2,3,5,7, elem = [1], acc = (recurse)
    return acc.concat(Array.isArray(elem) ? flatten(elem) : elem);
  }, []);
};

// Implement a simple store class with set(Node, value), get(Node) and has(Node) methods, which store a given Nodes with corresponding values.
