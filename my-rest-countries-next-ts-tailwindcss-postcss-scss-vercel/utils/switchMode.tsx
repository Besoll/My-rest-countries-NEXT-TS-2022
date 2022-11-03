export const switchMode = ({
  darkMode,
  setDarkMode,
}: {
  darkMode?: { value: boolean; iteration: number };
  setDarkMode: (darkMode: { value: boolean; iteration: number }) => void;
}) => {
  const localStorageValue: any = localStorage.getItem("light");

  const changeMode = (mode: boolean) => {
    if (mode) {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  };

  if (darkMode && darkMode.iteration === 0) {
    if (localStorage.getItem("light")) {
      setDarkMode({
        value: JSON.parse(localStorageValue),
        iteration: 1,
      });
      changeMode(JSON.parse(localStorageValue));
    } else {
      localStorage.setItem("light", JSON.stringify(false));
      setDarkMode({
        value: false,
        iteration: 1,
      });
    }
  }

  if (darkMode && darkMode.iteration === 1) {
    setDarkMode({ value: !darkMode.value, iteration: 1 });
    localStorage.setItem("light", String(!darkMode.value));
    changeMode(!darkMode.value);
  }
};
