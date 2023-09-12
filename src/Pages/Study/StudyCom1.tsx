import CustomP from "../../Components/CustomP/CustomP"
import { appName } from "../../Utils/hardCode"

const StudyCom1 = () => {
  
  return (
    <div>
      <section className="bg-slate-400 h-[10vh] flex justify-center items-center">
        <CustomP name={appName} style="font-italic text-[20px]"/>
      </section>
    </div>
  )
}

export default StudyCom1