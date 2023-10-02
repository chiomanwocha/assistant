import { useDispatch, useSelector } from "react-redux";
import theme from "../../style";
import { setFormWord } from "../../store/stateSlice";
import ToolTip from "../ToolTip";

const Input = () => {
  // Destructured global state
  const { darkMode, formWord } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();
  // Function handling change of input and setting it to the global state "formWord"
  const handleInputChange = (e) => {
    dispatch(setFormWord(e.target.value));
  };

  return (
    <ToolTip title='This is the input bar for your name'>
      <input
        title="This is the Search input"
        className={`outline-none bg-transparent py-3 xs:py-4 w-full font-bold text-[14px] xs:text-[20px]
             `}
        placeholder="Enter your name..."
        // setting form value to global state "formWord"
        value={formWord}
        onChange={handleInputChange}
        type="text"
      />
    </ToolTip>
  );
};

export default Input;
