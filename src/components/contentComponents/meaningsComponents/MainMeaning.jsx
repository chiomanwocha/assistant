/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import theme from "../../../style";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import ToolTip from "../../ToolTip";

const MainMeaning = ({ item, subMeaning }) => {
  // Destructured global state
  const { darkMode } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;

  // Render MainMeaning
  return (
    <div className="flex flex-col gap-2 xs:gap-4 sm:gap-6">
      <div className="w-full flex gap-3 sm:gap-6 items-center ">
        <ToolTip title="This is the Part of Speech">
          <h2
            className={`${mode.textMain} italic font-bold text-[20px] sm:text-[24px]`}
          >
            {item.partOfSpeech}
          </h2>
        </ToolTip>
        <div className={`${mode.elements} h-[1px] w-full`} />
      </div>
      <p className={`text-[16px] sm:text-[20px] ${mode.textSide} `}>Meaning</p>
      {/* Render subMeaning */}
      <div className="flex flex-col gap-3">{subMeaning}</div>
      {/* Antonyms and Synonyms */}
      {(item.antonyms.length > 0 || item.synonyms.length > 0) && (
        <div className="flex flex-col gap-2 sm:gap-3 ">
          <Synonyms item={item.synonyms} />
          <Antonyms item={item.antonyms} />
        </div>
      )}
    </div>
  );
};

export default MainMeaning;
