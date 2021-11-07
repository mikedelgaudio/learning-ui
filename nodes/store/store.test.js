const NodeStore = require("./store");

const store = new NodeStore();

const node1 = { s: 1 };
const node2 = { s: 2 };
const node3 = { s: 3 };
const node4 = { s: 4 };

store.set(node1, 1);
store.set(node2, 2);
store.set(node3, 3);

console.log(store.get(node1)); // 1
store.get(node2); // 2
store.get(node3); // 3

store.has(node1); // true
store.has(node4); // false
