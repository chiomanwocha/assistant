import { useSelector } from "react-redux";
import theme from "../../../style";

const SubMeaning = ({ item }) => {
  // Destructured global state
  const { darkMode } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;

  return (
    // Render SubMeaning
    <div className="flex gap-3">
      <div className="h-[4px] w-[4px] xs:h-[5px] xs:w-[5px] bg-purple rounded-full ml-2 xs:ml-3 mt-2 xs:mt-2 flex-grow-0 flex-shrink-0" />
      <div className="flex flex-col gap-2 sm:gap-4">
        <p className={`text-[12px] xs:text-[16px] sm:text-[18px] ${mode.textMain}`}>{item.definition}</p>
        {item.example && (
          <p className={"text-[12px] xs:text-[16px] sm:text-[18px] " + mode.textSide}>
            {'"' + item.example + '"'}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubMeaning;
