const something = function (options) {
  options = options || {};
  if (options.doSomething) {
    console.info("well hello there");
  }
};

export { something };
