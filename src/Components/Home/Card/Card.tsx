import { useEffect, useRef } from "react";
import { CardType } from "../../../Utils/Types/types"

/* eslint-disable */
const Card = ({ bg, description, title }: CardType) => {
  const card: any = useRef(null);

  function onmousemove(event: any) {
    let box = card.current;
    console.log(event)
    let x = (innerWidth / 4 - event.pageX) / 15;
    let y = (innerHeight / 4 - event.pageY) / 15;
    // box.style.transitionTimingFunction= "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
    box.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  };

  function onmouseover(event: any) {
    let box = card.current;
    box.style.transition = "all 0.1s ease";
    // box.style.transitionTimingFunction= "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
  };

  function onmouseout(event: any) {
    let box = card.current;
    box.style.transform = "rotateY(0deg) rotateX(0deg)";
    box.style.transition = "all 0.5s ease";
    // box.style.transitionTimingFunction= "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
  }
  useEffect(() => {
  }, [])
  return (
    <section ref={card} className=" h-[95%] w-[25%] flex flex-col items-center"
      onMouseMove={onmousemove} onMouseOver={onmouseover} onMouseOut={onmouseout}>
      <img src={bg} alt="service" className="w-[100%] object-cover h-[113px]" />
      <div className="h-[60%] text-center bg-[#161B1D] flex flex-col items-center justify-evenly">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </section>
  )
};


export default Card