// import MealCard from "../../Components/Home/Mealcard/MealCard";
// import { hotMealMenuType, hotMealType } from "../../Utils/Types/types";
// import { hotMeal } from "../../Utils/hardCode";
import { Fragment } from "react";
import { hotMealMenuType, hotMealType } from "../../../Utils/Types/types";
import { hotMeal } from "../../../Utils/hardCode";
import MealCard from "../../../Components/Home/Mealcard/MealCard";

const HotMeal = ({ navigate, menu1, menu2 }: hotMealType) => {
  return (
    <section className="h-[115vh] text-white flex flex-col items-center bg-black justify-center">
      <div className="h-[30%] w-[80%] flex flex-col items-center justify-evenly text-center">
        <h6 className="uppercase text-[30px]">{hotMeal.title}</h6>
        <p>{hotMeal.description}</p>
      </div>
      <div
        ref={menu1}
        className="flex w-[80%] justify-evenly h-[30%] relative order"
      >
        {hotMeal.menu1.map((menu: hotMealMenuType, key: number) => {
          return (
            <Fragment key={key}>
              <MealCard {...menu} />
            </Fragment>
          );
        })}
      </div>
      <div
        ref={menu2}
        className="flex w-[80%] justify-evenly h-[30%] relative order"
      >
        {hotMeal.menu2.map((menu: hotMealMenuType, key: number) => {
          return (
            <Fragment key={key}>
              <MealCard {...menu} />
            </Fragment>
          );
        })}
      </div>
      <div>
        <section
          className="w-[120px] h-[40px] bg-[#ff6240] flex justify-center 
        items-center rounded-lg transition delay-100 duration-200 ease-linear hover:bg-transparent
        hover:border hover:border-white cursor-pointer"
          onClick={() => navigate("View Menu", 1)}
        >
          <p>More pizza</p>
        </section>
      </div>
    </section>
  );
};

export default HotMeal;
