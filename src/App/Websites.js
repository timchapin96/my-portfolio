import {useState} from 'react';
import { useRef } from 'react';

function MyWebsites() {
  const [ScrollCount, setCount] = useState(0);

  const handleScroll = (event) => {
    const focusedImg = document.querySelector(".focused-img");
    const leftImg = document.querySelector(".unfocused-img-left");
    const rightImg = document.querySelector(".unfocused-img-right");

    if (event.deltaY > 0) {
      focusedImg.classList.replace("focused-img", "unfocused-img-left");
      leftImg.classList.replace("unfocused-img-left", "unfocused-img-right");
      rightImg.classList.replace("unfocused-img-right", "focused-img");
      setCount(ScrollCount+1);

    }
    else if(event.deltaY < 0) {
      focusedImg.classList.replace("focused-img", "unfocused-img-right");
      rightImg.classList.replace("unfocused-img-right", "unfocused-img-left");
      leftImg.classList.replace("unfocused-img-left", "focused-img");
      setCount(ScrollCount+1);
    }
  }
  return (
    <div className="carousel">
      <h4>My Websites</h4>
      <div className="my-websites" onWheel = {handleScroll}>
        <div className="teach-tokyo">
          <img className="unfocused-img-left" src="/assets/teach_tokyo.png" alt="Teach Tokyo thumbnail"></img>
        </div>
        <div className="tokyo-maps">
          <img className="focused-img" src="/assets/tokyo_maps.png" alt="Teach Tokyo thumbnail"></img>
        </div>
        <div className="souji-center">
          <img className="unfocused-img-right" src="/assets/souji_center.png" alt="Teach Tokyo thumbnail"></img>
        </div>


      </div>
    </div>
  );
}

export default MyWebsites;
