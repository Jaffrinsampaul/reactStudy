import { pTag } from "../../Utils/Types/types"

const CustomP = ({ name, style }: pTag) => {
  return (
    <>
    <p className={style && style}>{name}</p>
    </>
  )
}

export default CustomP