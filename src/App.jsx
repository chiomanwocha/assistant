import { useDispatch, useSelector } from "react-redux";
import theme from "./style";
import Search from "./components/Search";
import Content from "./components/Content";
import { useEffect } from "react";
import { searchByWord } from "./store/stateAction";
import Header from "./components/Header";
import hoverIcon from "../src/assets/hand-cursor.svg";
import { setHover } from "./store/stateSlice";

const App = () => {
  // Destructured global state
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
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();

  // Calling the API & re-rendering only when there's a change in searchWord
  useEffect(() => {
    if (searchWord) {
      dispatch(searchByWord(searchWord));
      // Return screen to the top on re-render
      window.scrollTo(0, 0);
    }
  }, [dispatch, searchWord]);

  // Call API and render "welcome" onload
  useEffect(() => {
    dispatch(searchByWord("welcome"));
  }, [dispatch]);

  const onPageStyle = {
    top: position.top || 'auto', 
    left: position.left || '5%', 
    right: position.right || 'auto', 
    bottom: position.bottom || '5%', 
  };


  // Calculate the image source based on conditions
  let src = "../src/assets/wave-92_256.gif"; // Default source is "man.gif"

  if (display) {
    src = "../src/assets/wave-92_256.gif"; // If display is true, set source to "business.gif"
  } else if (hovering && hover) {
    src = "../src/assets/wave-92_256.gif"; // If both hovering and hover are true, set source to "business.gif"
  }

  return (
    // Entire page
    <section
      className={`w-full h-[100dvh] transition ${font.type} ${mode.background} outline-none relative overflow-x-hidden`}
    >
      <button
        onClick={() => dispatch(setHover())}
        className={`aspect-square h-20 w-20 ${mode.background} border-[1px] flex-col z-[10] border-red-500 rounded-full fixed bottom-[10%] right-[10%] flex items-center justify-center`}
      >
        <p className={` text-red-500 font-[600]`}>{hover ? "Allow hover" : "Disable hover"}</p>
      </button>
      {/* Container to hold automatic height outside the sm:fixed width */}
      <div
        className={`w-full h-auto transition pb-14 sm:pb-24 ${mode.background}`}
      >
        {/* Content Container; holding fixed width for large screens */}
        <div
          className={`w-full px-4 xs:px-6 sm:px-12 md:px-0 md:w-[737px] h-auto mx-auto `}
        >
          {/* Header Component */}
          <Header />
          {/* Search Bar Component */}
          <Search />
          {/* Content Component */}
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
        <img
          src={src}
          alt=""
          className={`w-[200px] mt-[-10px] opacity-60`}
        />
      </div>
    </section>
  );
};

export default App;
