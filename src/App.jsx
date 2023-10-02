import { useDispatch, useSelector } from "react-redux";
import theme from "./style";
import Content from "./components/Content";
import { useEffect } from "react";
import { searchByWord } from "./store/stateAction";
import Header from "./components/Header";
import { setHover } from "./store/stateSlice";
import ToolTip from "./components/ToolTip";
import CursorToolTip from "./components/CursorToolTip";

const App = () => {
  const {
    darkMode,
    font,
    searchWord,
    hover,
    position,
    hovering,
    message,
    display,
  } = useSelector((state) => state.app);
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchWord) {
      dispatch(searchByWord(searchWord));
      window.scrollTo(0, 0);
    }
  }, [dispatch, searchWord]);


  useEffect(() => {
    dispatch(searchByWord("welcome"));
  }, [dispatch]);

  const onPageStyle = {
    top: position.top || "auto",
    left: position.left || "5%",
    right: position.right || "auto",
    bottom: position.bottom || "5%",
  };
  let src = "/src/assets/wave-92_256.gif"; 

  if (display) {
    src = "/src/assets/wave-92_256.gif";
  } else if (hovering && hover) {
    src = "/src/assets/wave-92_256.gif";
  }

  return (
    <section
      className={`w-full h-[100dvh] transition ${font.type} ${mode.background} outline-none relative overflow-x-hidden`}
    >
      <button
        onClick={() => dispatch(setHover())}
        className={`aspect-square h-20 w-20 ${mode.background} border-[1px] flex-col z-[10] border-red-500 rounded-full fixed bottom-[10%] right-[10%] flex items-center justify-center`}
      >
        <p className={` text-red-500 font-[600]`}>
          {hover ? "Allow Click" : "Allow Hover"}
        </p>
      </button>
      <div
        className={`w-full h-auto transition pb-14 sm:pb-24 ${mode.background}`}
      >
        <div
          className={`w-full px-4 xs:px-6 sm:px-12 md:px-0 md:w-[737px] h-auto mx-auto `}
        >
          <Header />
          <CursorToolTip title="This is the title">
            <ToolTip title="This is the title">
              <p className="text-white text-[32px] mb-10 cursor-default ">
                These are the things I love about you
              </p>
            </ToolTip>
          </CursorToolTip>
          <Content />
        </div>
      </div>
      <div
        className={` rounded fixed bottom-[10%] left-[5%] mt-[50px] w-[250px] h-auto `}
        style={onPageStyle}
      >
        <div className=" max-w-[200px] flex-wrap  transition bg-red-500 text-white py-1 px-2 rounded text-center leading-[22px]">
          {message ? message : "Hi, I'm Chioma! your on-page assistant"}
          <div className="triangle-down"></div>
        </div>
        <img src={src} alt="" className={`w-[200px] mt-[-10px] opacity-60`} />
      </div>
    </section>
  );
};

export default App;
