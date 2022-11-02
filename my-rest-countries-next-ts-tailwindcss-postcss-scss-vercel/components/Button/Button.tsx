import s from "./Button.module.css"

const Button = ({ 
    text, 
    icon, 
    onClick, 
    type, 
}: {
    text?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    type: "primary" | "secondary";
    }) => {

    return(
        <button onClick={onClick} className={`btn ${s[type]}`}>
            { icon }
            { text }
        </button>
    )
}

export default Button