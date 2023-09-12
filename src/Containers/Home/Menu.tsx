import MenuCard from "../../Components/Home/menu/MenuCard";
import { hotMealMenuType } from "../../Utils/Types/types";
import { menu } from "../../Utils/hardCode";
import { Fragment } from "react"

const Menu = () => {
  return (
    <section className="h-[60vh] w-full flex flex-col items-center">
      <h6>{menu.title}</h6>
      <p>{menu.description}</p>
      <section className="w-[90%] flex flex-wrap justify-evenly gap-[10px]">
        {
          menu.dish.map((dish: hotMealMenuType, key: number) => {
            return (
              <Fragment key={key}>
                <MenuCard {...dish} />
              </Fragment>
            )
          })
        }
      </section>
    </section>
  )
};


export default Menu