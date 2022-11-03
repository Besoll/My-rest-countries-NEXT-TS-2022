import { Back, NotFoundIcon } from "@assets/icons"
import { Button } from "@components/index"
import s from "./NotFound.module.css"
import { useRouter } from 'next/router'



const NotFound = ({ returnHome }: { returnHome?: boolean }) => {

  const router = useRouter()

  return (
    <div className={s.root}>
        <div className="svgContainer">
        <Button 
          type={"primary"}
          icon={<NotFoundIcon />}
          text={" "}
          onClick={() => router.back()}
         />
        </div>
        <h1 className={s.h1}>404 error</h1>
        <p className={s.p}>Uh oh! Looks like you got lost.</p>
        <p className={s.p}>Go back to the homepage</p>
        <Button 
          type={"primary"}
          icon={<Back />}
          text={" Go HOME!"}
          onClick={() => router.back()}
         />
    </div>
  )
}

export default NotFound

