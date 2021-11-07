/*
 * Create an event emitter that goes like this
 * emitter = new Emitter();
 *
 * Allows you to subscribe to some event
 * sub1 = emitter.subscribe('function_name', callback1);
 * (you can have multiple callbacks to the same event)
 * sub2 = emitter.subscribe('function_name', callback2);
 *
 * You can emit the event you want with this api
 * (you can receive 'n' number of arguments)
 * sub1.emit('function_name', foo, bar);
 *
 * And allows you to release the subscription like this
 * (but you should be able to still emit from sub2)
 * sub1.release();
 */
class Emitter {
  constructor(events = {}) {
    this.events = events;
  }

  subscribe(name, cb) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      release: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1),
    };
  }

  emit(name, ...args) {
    return (this.events[name] || []).map((fn) => fn(...args));
  }
}

export default Emitter;
