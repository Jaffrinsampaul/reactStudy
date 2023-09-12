import { hotMealMenuType } from "../../../Utils/Types/types";

const MealCard = ({ description, dish, image, price }: hotMealMenuType) => {
  return (
    <div className="w-[30%] h-[90%] flex justify-between bg-[#111618] rounded-[10px] overflow-hidden">
      <section className="w-[35%] h-full">
        <img src={image} alt="hot meal menu" className="w-full h-full object-cover" />
      </section>
      <section className="h-full w-[62%] flex flex-col justify-between p-[2px]">
        <h6>{dish}</h6>
        <p className="text-[13px]">{description}</p>
        <p>{price}</p>
      </section>
    </div>
  )
};

export default MealCard