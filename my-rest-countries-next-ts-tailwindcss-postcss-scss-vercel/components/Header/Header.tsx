import s from "./Header.module.css";
import { Button } from "@components/index"
import { useEffect, useState } from "react";
import { switchMode } from "utils/switchMode";
import { Moon, Sun } from "@assets/icons";

const Header = () => {
  const [ darkMode, setDarkMode ] = useState({value: false, iteration: 0})

  useEffect(() => {
    switchMode({ darkMode, setDarkMode })
  }, [])

  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <h1>Where in the world?</h1>
      </div>
      <Button 
        text = "Dark Mode"
        onClick={() => switchMode({ darkMode, setDarkMode})}
        icon = {darkMode.value ? <Moon/> : <Sun />}
        type = "primary"
      />
    </div>)
}

export default Header;
