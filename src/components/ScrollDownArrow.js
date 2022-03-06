const ScrollDownArrow = () => {
  const handleClick = () => {
    
    const dealsAnchor = document.getElementById('deals-anchor')
    dealsAnchor.scrollIntoView(true)
  }
 
  return (
      <svg className="sd-arrows" onClick={handleClick}>
        <path className="sda1" d="M0 0 L30 32 L60 0"></path>
        <path className="sda2" d="M0 20 L30 52 L60 20"></path>
        <path className="sda3" d="M0 40 L30 72 L60 40"></path>
      </svg>
  )
}

export default ScrollDownArrow

// const simulateClick = function (elem) {
    //   // Create our event (with options)
    //   var evt = new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //     view: window
    //   });
    //   // If cancelled, don't dispatch our event
    //   var canceled = !elem.dispatchEvent(evt);
    // };
    // let slides = Array.from(document.querySelectorAll('.slick-slide'));
    
    // slides.forEach((slide) => {
    //   setTimeout(() => {
    //     let rect = slide.getBoundingClientRect();
    //     console.log('one slide');
    //     if (window.innerWidth < rect.right) {
    //       console.log('found hidden slide');
    //       slide.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'nearest'});
    //     }
    //   }, 1500)
    // })
 