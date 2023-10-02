import theme from "../../style";
import { useSelector } from "react-redux";

const Word = () => {
  // Destructured global state
  const { darkMode, wordData } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Selecting interested Object from API response Array
  const word = wordData[0];

  return (
    // Returning Word
    <h1
      className={`text-[24px] cursor-pointer xs:text-[32px] sm:text-[64px] font-bold my-0 py-0 overflow-hidden
         overflow-ellipsis ${mode.textMain}`}
    >
      {word.word}
    </h1>
  );
};

export default Word;
