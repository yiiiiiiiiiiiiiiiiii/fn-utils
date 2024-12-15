function pipe(...args) {
  return function (num) {
    return args.reduce((res, cb) => {
      return cb(res);
    }, num);
  };
}
