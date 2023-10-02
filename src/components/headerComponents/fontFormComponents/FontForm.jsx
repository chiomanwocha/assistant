import theme from "../../../style";
import { toggleDropDown } from "../../../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import expandMore from '../../../assets/expand_more.png'

const FontForm = () => {
  const dispatch = useDispatch();
  // Destructured global state
  const { darkMode, dropDown, font } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Toggle Drop Down Function
  const handleDropDown = () => {
    dispatch(toggleDropDown(dropDown ? false : true));
  };

  return (
    <div
      title="By clicking on this, You can change the font of the website"
      onClick={handleDropDown}
      className={`w-auto flex justify-end items-center cursor-pointer `}
    >
      <div
        className={`font-[700] text-[14px] xs:text-[16px] sm:text-[18px] mr-2 xs:mr-3 sm:mr-4
            ${mode.textMain}`}
      >
        {font.name}
      </div>
      {/* Expand more button */}
      <img src={expandMore} alt='expand more' className={`transition ${dropDown ? "rotate-180" : "rotate-0"} w-[24px] sm:w-[30px]`}/>
      {/* Font Selection Dropdown Conditional render*/}
    </div>
  );
};

export default FontForm;
