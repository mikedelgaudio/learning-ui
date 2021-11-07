// Implement a simple store class with set(Node, value), get(Node) and has(Node) methods, which store a given Nodes with corresponding values.

class NodeStore {
  constructor() {
    this.store = {};
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    const nodeKey = Symbol(node);
    node.symbol = nodeKey;
    this.store[nodeKey] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const nodeKey = node.symbol;
    return this.store[nodeKey];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.store[node.symbol] !== undefined;
  }
}

module.exports = NodeStore;
