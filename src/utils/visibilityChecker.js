export const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return ( 
    elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    )
};
  
export const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
