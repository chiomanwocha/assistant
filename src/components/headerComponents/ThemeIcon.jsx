import moon from "../../assets/moon.svg";
import darkMoon from "../../assets/darkMoon.svg";
import { useSelector } from "react-redux";
import ToolTip from "../ToolTip";

const ThemeIcon = () => {
    // Destructured global state
    const { darkMode } = useSelector((state) => state.app);

  return (
    <ToolTip title='This is theme icon'>
    <div>
      {darkMode ? (
          <img src={darkMoon} alt="moon" className='w-[20px] xs-[26px]' />
        ) : (
          <img src={moon} alt="moon"  className='w-[20px] xs-[26px]'/>
        )}
    </div>
    </ToolTip>
  )
}

export default ThemeIcon
