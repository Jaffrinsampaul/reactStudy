import Card from "../../Components/Home/Card/Card"
import { CardType, OrderType } from "../../Utils/Types/types"
import { service, serviceMsg } from "../../Utils/hardCode";
import {Fragment} from "react"

const Order =({order, container}: OrderType)=>{
  return(
    <section ref={order} className="text-white
       h-[90vh] flex flex-col justify-evenly items-center order relative">
        <div className="h-[30%] flex flex-col items-center">
          <h6 className="uppercase text-[30px]">{serviceMsg.title}</h6>
          <p className="w-[78%] text-center pt-[20px]">{serviceMsg.describe}</p>
        </div>
        <div className="flex justify-evenly h-[60%] w-[80%]" ref={container}>
          {
            service.map((obj: CardType, index: number) => {
              return (
                <Fragment key={index}>
                  <Card {...obj} />
                </Fragment>
              )
            })
          }
        </div>
      </section>
  )
};

export default Order;