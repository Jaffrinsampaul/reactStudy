import { useEffect, useState } from "react";
import Header from "../../Containers/Header/Header"
import { MENU_OPTION } from "../../Utils/hardCode"

import { useNavigate, Outlet } from "react-router-dom";
const PizzaTime = () => {
  const navigate = useNavigate();
  const [selectedMenu, setMenu] = useState(0);

  function handleMenu(url: string, index: number) {
    try {
      navigate(url);
      setMenu(index)
    } catch (error: any) {
      console.error(error.message)
    }
  };

  window.addEventListener("locationchange", (evnt) => {
    console.log("jer")
  })
  useEffect(() => {
  }, [])

  return (
    <div className="">
      <Header menuOption={MENU_OPTION} handleMenu={handleMenu} selectedMenu={selectedMenu} />
      <section className="h-[85vh] overflow-y-scroll hiddenScrollBar">
        <Outlet context={[handleMenu]}/>
      </section>
    </div>
  )
}

export default PizzaTime