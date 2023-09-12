import CustomButton from "../../Components/CustomButton/CustomButton";
import { PlayBackVideoType } from "../../Utils/Types/types";
import { welcomeMessage } from "../../Utils/hardCode";
import { Video } from "../../Utils/videoController";

const PlayBackVideo = ({title, navigate}: PlayBackVideoType) => {
  return (
    <>
      <section >
        <video autoPlay loop muted className="h-[85vh] w-full object-cover opacity-30">
          <source src={Video.bgVideo} type="video/mp4" />
        </video>
      </section>
      <section ref={title} className="w-[80%] h-[55vh] flex flex-col justify-around items-center
        absolute top-[5%] left-[10%] text-white title">
        <div className="flex flex-col  items-center h-[70%] w-full" >
          <p className="text-[#E75C3F] text-[60px] ">{welcomeMessage.title}</p>
          <p className="uppercase text-[50px] font-bold">{welcomeMessage.subTitle}</p>
          <p className="text-[28px] w-[60%] text-center">{welcomeMessage.describion}</p>
        </div>
        <div className="flex w-[40%] justify-evenly h-[10%] items-center">
          <CustomButton btnName="Read Blog" style="bg-[#fac564] transition delay-150 duration-300 ease-in-out\
          text-black cursor-pointer
           w-[130px] h-[35px] flex justify-center items-center rounded-[5px] hover:bg-white hover:bg-opacity-10"
            fun={navigate} />
          <CustomButton btnName="View Menu" fun={navigate} style="bg-white bg-opacity-10
          transition delay-150 duration-300 ease-in-out hover:bg-[#fac564] text-black cursor-pointer
          w-[130px] h-[35px] flex justify-center items-center rounded-[5px]" />
        </div>
      </section>
    </>
  )
};

export default PlayBackVideo;