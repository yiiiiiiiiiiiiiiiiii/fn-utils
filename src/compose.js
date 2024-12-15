function compose(...args) {
  return function (num) {
    return args.reduceRight((res, cb) => {
      return cb(res);
    }, num);
  };
}
