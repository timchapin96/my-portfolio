import anime from 'animejs/lib/anime.es.js';

function MyWebsites() {
  let timerId;

  //Throttle function to stop overscrolling
  var throttleFunction = function (func, delay) {
    // If setTimeout is already scheduled, no need to do anything
    if (timerId) {
      return
    }

    // Schedule a setTimeout after delay seconds
    timerId = setTimeout(function () {
      func()

      // Once setTimeout function execution is finished, timerId = undefined so that in <br>
      // the next scroll event function execution can be scheduled by the setTimeout
      timerId = undefined;
    }, delay)
  }
  //Handle Scrolling and animate with anime.js
  const handleScroll = (event) => {
    throttleFunction(() => {
      const focusedImg = document.querySelector(".focused-img");
      const leftImg = document.querySelector(".unfocused-img-left");
      const rightImg = document.querySelector(".unfocused-img-right");

      if (event.deltaY >= 0) {
        rightImg.style.zIndex = 1;
        focusedImg.style.zIndex = 0;
        let tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 400
        })
        tl
          .add({
            targets: ".unfocused-img-left",
            keyframes: [
              { left: '-50%' },
              { left: '100%', duration: 1 },
              { left: '66.667%' }
            ]
          })
          .add({
            targets: [".unfocused-img-right"],
            keyframes: [
              { width: "40vw", left: "-110%" }
            ]
          }, 0)
          .add({
            targets: ".focused-img",
            keyframes: [
              { width: "30vw", left: "-23%"}
            ]
          }, 0)
        setTimeout(() => {
          focusedImg.classList.replace("focused-img", "unfocused-img-left");
          leftImg.classList.replace("unfocused-img-left", "unfocused-img-right");
          rightImg.classList.replace("unfocused-img-right", "focused-img");
          leftImg.removeAttribute('style');
          rightImg.removeAttribute('style');
          focusedImg.removeAttribute('style');

        }, "450");


      }
      else if (event.deltaY < 0) {
        leftImg.style.zIndex = 1;
        focusedImg.style.zIndex = 0;
        let tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 400
        })
        tl
          .add({
            targets: ".unfocused-img-right",
            keyframes: [
              { left: '110%' },
              { left: '-300%', duration: 1 },
              { left: '-190.8%' }
            ]
          })
          .add({
            targets: [".unfocused-img-left"],
            keyframes: [
              { width: "40vw", left: "30%" }
            ]
          }, 0)
          .add({
            targets: ".focused-img",
            keyframes: [
              { width: "30vw", left: "72.5%" }
            ]
          }, 0)
        setTimeout(() => {
          focusedImg.classList.replace("focused-img", "unfocused-img-right");
          rightImg.classList.replace("unfocused-img-right", "unfocused-img-left");
          leftImg.classList.replace("unfocused-img-left", "focused-img");
          leftImg.removeAttribute('style');
          rightImg.removeAttribute('style');
          focusedImg.removeAttribute('style');

        }, "450");
      }
    }, 550);
  }

  return (
    <div className="carousel">
      <h4>My Websites</h4>
      <div className="my-websites" onWheel={handleScroll}>
        <div className="teach-tokyo">
          <a href="https://www.teachtokyo.com/" target="_blank" rel="noopener noreferrer"><img className="unfocused-img-left website-card" src="/assets/teach_tokyo.png" alt="Teach Tokyo thumbnail" /></a>
        </div>
        <div className="tokyo-maps">
          <img className="focused-img website-card" src="/assets/tokyo_maps.png" alt="Teach Tokyo thumbnail"></img>
        </div>
        <div className="souji-center">
          <img className="unfocused-img-right website-card" src="/assets/souji_center.png" alt="Teach Tokyo thumbnail"></img>
        </div>


      </div>
    </div>
  );
}

export default MyWebsites;
