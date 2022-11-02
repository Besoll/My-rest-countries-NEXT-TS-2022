import { NotFoundIcon } from "@assets/icons"
import s from "./NotFound.module.css"


const NotFound = ({ returnHome }: { returnHome?: boolean }) => {
  return (
    <div className={s.root}>
        <div className="svgContainer">
            <NotFoundIcon />
        </div>
        <h1>404 error</h1>
        <p>Uh oh! Looks like you got lost.</p>
        <p>Go back to the homepage if you dare!</p>
        <button>I dare! Go HOME!</button>
        
    </div>
  )
}

export default NotFound

