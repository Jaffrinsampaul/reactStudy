import { customButton } from "../../Utils/Types/types"

const CustomButton = ({ btnName, fun, style }: customButton) => {
  return (
    <div className={style} onClick={() => { fun(btnName) }}>
      {btnName}
    </div>
  )
};

export default CustomButton