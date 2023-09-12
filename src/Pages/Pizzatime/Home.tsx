import CustomButton from "../../Components/CustomButton/CustomButton";
import { hotMeal, service, serviceMsg, welcomeDescription, welcomeMessage } from "../../Utils/hardCode";
import { image } from "../../Utils/imageController";
import { Video } from "../../Utils/videoController";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Card from "../../Components/Home/Card/Card";
import { CardType } from "../../Utils/Types/types";
import Order from "../../Containers/Home/Order";
import Info from "../../Containers/Home/Info";
import Banner from "../../Containers/Home/Banner";
import WelcomeMsg from "../../Containers/Home/Welcomemsg";
import PlayBackVideo from "../../Containers/Home/Playbackvideo";
import HotMeal from "../../Containers/Home/Hotmeal";
import { useOutletContext } from "react-router-dom"
import Menu from "../../Containers/Home/Menu";

const Home = () => {
  const navigator = useNavigate();
  const pizza1: any = useRef(null);
  const pizza2: any = useRef(null);
  const title: any = useRef(null);
  const container: any = useRef(null);
  const order: any = useRef(null);
  const menu1: any= useRef(null);
  const menu2: any= useRef(null)

  const [handleMenu]: any = useOutletContext();

  function navigate(btnName: string) {
    switch (btnName) {
      case "Read Blog":
        handleMenu("/pizza/blog", 2)
        break;

      case "View Menu":
        handleMenu("/pizza/menu", 1)
        navigator("/pizza/menu")
        break;
    }
  }

  function interactionListener(tag: any, className: string) {
    try {
      const observer: any = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tag.current.classList.add(className);
            return;
          }
          tag.current?.classList.remove(className);
        })
      })
      observer.observe(tag.current);
    } catch (error: any) {
      console.error(error.message)
    }
  };


  useEffect(() => {
    interactionListener(pizza1, "pizza1");
    interactionListener(pizza2, "pizza2");
    interactionListener(title, "title");
    interactionListener(order, "order");
    interactionListener(menu1, "order");
    interactionListener(menu2,"order");
  }, [])


  return (
    <div className=" w-full bg-black relative">
      <PlayBackVideo navigate={navigate} title={title} />
      <WelcomeMsg />
      <Banner />
      <Info pizza1={pizza1} pizza2={pizza2} />
      <Order container={container} order={order} />
      <HotMeal navigate={navigate} menu1={menu1} menu2={menu2}/>
      {/* <Menu/> */}
    </div >
  )
};

export default Home