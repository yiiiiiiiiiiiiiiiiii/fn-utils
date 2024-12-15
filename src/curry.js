function currying(fn) {
  function curried(...args) {
    if (args.length > fn.length) {
      return fn.apply(this, args);
    } else {
      return function (..._args) {
        curried.apply(this, [...args, ..._args]);
      };
    }
  }

  return curried;
}
