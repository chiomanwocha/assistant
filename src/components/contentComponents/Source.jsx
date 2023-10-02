import { useSelector } from "react-redux";
import theme from "../../style";

const Source = () => {
  // Destructured global state
  const { wordData, darkMode } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Mapping through source
  const source = wordData[0].sourceUrls.map((item, index) => {
    // Returning source links
    return (
      <a
        href={item}
        className={`${mode.textMain} underline cursor-pointer text-[12px] xs:text-[14px] sm:w-full 
        whitespace-nowrap overflow-hidden overflow-ellipsis sm:text-[16px]`}
        key={index}
      >
        {item}
      </a>
    );
  });

  // Rendering Source
  return (
    // Source container
    <div className="w-full flex flex-col gap-3 xs:gap-4 sm:gap-6">
      <div className={"h-[1px] w-full " + mode.elements} />
      <div className="flex flex-col md:flex-row gap-1 xs:gap-2 sm:gap-4">
        <h3 className={`${mode.textSide} text-[12px] xs:text-[16px] sm:text-[18px]`}>Source: </h3>
        {/* Rendering source */}
        <div className="flex flex-col">{source}</div>
      </div>
    </div>
  );
};

export default Source;
