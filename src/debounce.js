export function debounce(fn, delay, leading, trailing = true) {
  let timer;
  let pending;

  function _debounce(...args) {
    // 处理头部逻辑
    if (leading && !pending) {
      fn.apply(this, args);
      pending = true;
      setTimeout(() => (pending = false), delay);
      return;
    }

    if (trailing) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
        if (pending) pending = false;
      }, delay);
    }
  }

  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  return _debounce;
}
