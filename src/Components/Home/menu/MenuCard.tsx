import { hotMealMenuType } from "../../../Utils/Types/types";

const MenuCard = ({ description, dish, image, price }: hotMealMenuType) => {
  return (
    <section className="w-[49%] h-[100px] bg-slate-300 flex items-center">
      <section className="h-[80px] w-[80px] overflow-hidden rounded-[50%]">
        <img src={image} alt="menu" className="h-full w-full object-cover" />
      </section>
      <section>
        
      </section>
    </section>
  )
};

export default MenuCard