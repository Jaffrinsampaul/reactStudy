// import { InfoType } from "../../Utils/Types/types"
// import { image } from "../../Utils/imageController"

import { InfoType } from "../../../Utils/Types/types";
import { image } from "../../../Utils/imageController";

const Info = ({ pizza1, pizza2 }: InfoType) => {
  return (
    <section className="flex w-full h-[40vh]">
      <div className="text-white w-[45%] text-center h-full flex flex-col justify-evenly">
        <section>
          <p>000 (000) 123 4567</p>
          <p> Contact us if you have any questions</p>
        </section>
        <section>
          <p> 506 Roy Alley 80202</p>
          <p> Colorado, Denver</p>
        </section>
        <section>
          <p> Open Monday-Friday</p>
          <p> 8:00am - 9:00pm</p>
        </section>
      </div>
      <div
        className="flex h-full w-[50%] justify-evenly items-center 
        transition delay-1000 ease-linear duration-700 "
        id="test"
      >
        <img
          src={image.Pizza}
          alt="pizza"
          ref={pizza1}
          className="h-[195px] pizza1 relative"
        />
        <img
          src={image.Pizza}
          alt="pizza"
          ref={pizza2}
          className="h-[195px] pizza2 relative"
        />
        <img src={image.Pizza} alt="pizza" className="h-[195px]" />
      </div>
    </section>
  );
};
export default Info;
