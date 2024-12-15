function throttle(fn, wait, leading = true, trailing = true) {
  let lastInvoke;
  let timer;

  function _run(...args) {
    fn.apply(this, args);
    lastInvoke = Date.now();
  }

  function _throttle(...args) {
    if (Date.now() - lastInvoke > wait) {
      _run(...args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        _run(...args);
      }, lastInvoke + wait);
    }
  }

  return _throttle;
}
