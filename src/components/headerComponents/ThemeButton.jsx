import { toggleTheme, setFavTheme } from "../../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ThemeButton = () => {
    const dispatch = useDispatch();
    // Local preferred theme state
    const [prefersDarkMode, setPrefersDarkMode] = useState(false);
    // Setting theme on change of preferred theme
    useEffect(() => {
        setPrefersDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        // Setting local theme state to global
        dispatch(setFavTheme(prefersDarkMode));
    }, [dispatch, prefersDarkMode]);
    // Destructured global state
    const { darkMode } = useSelector((state) => state.app);
    // Toggle Theme Function
    const handleTheme = () => {
        dispatch(toggleTheme());
    };

  return (
      <div className="flex items-center">
          <label title="By clicking on this, you can toggle between light and dark mode" className="switch ">
              <input checked={darkMode} onChange={handleTheme} type="checkbox" />
              <span className="slider round"></span>
          </label>
      </div>
  )
}

export default ThemeButton
