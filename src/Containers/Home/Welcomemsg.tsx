import { welcomeDescription } from "../../Utils/hardCode";

const WelcomeMsg =()=>{
  return(
    <section className="text-white flex justify-center items-center h-[65vh] pt-1">
        <article className="w-[80%] text-center h-[90%] flex flex-col justify-evenly items-center">
          <p className="text-[30px] uppercase">welcome to <span>pizza time</span> restaurant</p>
          <p className="text-[20px] w-[70%] line-height-[28px]">{welcomeDescription}</p>
        </article>
      </section>
  )
};

export default WelcomeMsg