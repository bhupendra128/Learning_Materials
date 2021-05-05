let counter = 0;
const getSearch = (data) => {
  console.log("....fetch data", counter++, data, this.ContextPassing);
};

//rate limit a function call i.e. difference of time b/w keyStroke triggered
// const debounce = function(fn, delay) {
//   let timer;
//   return function() {
//     let args = arguments,
//       context = this;
//     this.ContextPassing = "Passing a context";
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       //   fn();
//       fn.apply(context, args);
//     }, delay);
//   };
// };

const debounce = (fn, delay) => {
  let timer;
  return function() {
    let args = arguments,
      context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// function call after a fixed interval call time, first call is made immediately

const throttle = (fn, limit) => {
  let flag = true;
  return function() {
    let args = arguments,
      context = this;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

// here getSearchData refer to obj not to global
// const getSearchData = new debounce(() => getSearch("hello"), 300);

// here getSearchData refer to global not to obj
// const getSearchData = debounce(getSearch, 300);

const getSearchData = throttle(getSearch, 300);
