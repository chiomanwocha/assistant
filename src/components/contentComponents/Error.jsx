import { useDispatch, useSelector } from "react-redux";
import theme from "../../style";
import { setFormWord } from "../../store/stateSlice";

const Error = () => {
  // Destructured global state
  const { messages, darkMode } = useSelector((state) => state.app);
  // Destructured Error Messages
  const { title, message, resolution } = messages;
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light; const dispatch = useDispatch();

  return (
    // Error Container
    <div className="h-full w-full flex flex-col justify-center mt-[30%] sm:mt-0
      items-center text-center">
      {/* Caution Image */}
      <img
        src="https://img.icons8.com/color/96/null/error--v1.png"
        className="w-[98px] h-auto mb-4"
        alt="Caution Image"
      />
      {/* Rendering error messages */}
      {messages && (
        <div className={`${mode.textSide} text-[12px] xs:text-[14px] sm:text-[18px] mb-6 `}>
          {title && (
            <h1 className={`${mode.textMain} mb-3 text-[12px] xs:text-[18px] sm:text-[24px] font-[700]`}>
              {title}
            </h1>
          )}
          {message && <h3>{message}</h3>}
          {resolution && <h3>{resolution}</h3>}
          {!message && <h3 className="capitalize">{messages}</h3>}
        </div>
      )}
      {/* Clear search bar button */}
      {message &&
      <div
        title='Clear search bar'
        onClick={() => {
          dispatch(setFormWord(""));
        }}
        className={`bg-purple text-white rounded-[4px] xs:rounded-[8px] text-[12px] xs:text-[14px] sm:text-[18px]
        px-4 py-2  xs:px-6 xs:py-3 cursor-pointer`}
      >
        Clear Search
      </div>}
    </div>
  );
};

export default Error;
