export const elementInView = (el, dividendTop = 1, dividendBottom=1) => {
  const elementTop = el.getBoundingClientRect().top;
  const elementBottom = el.getBoundingClientRect().bottom;

  // console.log('top');
  // console.log(elementTop, window.innerHeight / -5);
  // console.log('bottom');
  // console.log(elementBottom, window.innerHeight / 2);

  return (
    (elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividendTop)
    // &&
    // (elementBottom >=
    //   (window.innerHeight || document.documentElement.clientHeight) / dividendBottom)
  );
};
  
export const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
  
export const sleep = (delay) => {
  let start = new Date().getTime()
  while (new Date().getTime() < start + delay) {}
}