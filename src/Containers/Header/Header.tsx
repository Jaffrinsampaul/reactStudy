import React, { Fragment } from "react"
import { header } from "../../Utils/Types/types";
import { image } from "../../Utils/imageController";
import {useLocation} from "react-router-dom"
const Header = ({ menuOption, handleMenu, selectedMenu }: header) => {
  const location = useLocation();
  console.log(location.state)
  return (
    <div className="h-[15vh] bg-black flex items-center justify-between text-white">
      <section className="w-[20%] flex justify-center items-center">
        <img src={image.Logo} alt="logo" height={50} width={50}
          className="hover:rotate-45 
        transition delay-150 duration-300 ease-in-out" />
      </section>
      <section className="w-[70%] flex items-center justify-evenly">
        {
          menuOption.map((option: { name: string, url: string }, index: any) => {
            return (
              <Fragment key={index}>
                <p className={`cursor-pointer transition delay-100 duration-100 ease-linear 
                hover:text-[#BD4D35] ${selectedMenu === index ? "text-[#BD4D35]" : "text-white"}`}
                  onClick={() => handleMenu(option.url, index)}>{option.name}</p>
              </Fragment>
            )
          })
        }
      </section>
    </div>
  )
};

export default Header