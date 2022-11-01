export const switchMode = ({
    darkMode, 
    setDarkMode
}: {
    darkMode?: {value: boolean; iteration: number};
    etDarkMode?: (darkMode: { value: boolean; iteration: number }) => void;
}) => {
    const localStorageValue = localStorage.getItem("light");

    const changeMode = (dark: boolean) => {
        if(mode) {
            document.querySelector("html")?.classList.remove("dark");
        }else {
            document.querySelector("html")?.classList.add("dark");
        }
    }
}

if (darkMode && darkMode.iteration === 0) {
    
}