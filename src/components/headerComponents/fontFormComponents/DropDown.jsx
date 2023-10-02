import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import theme from "../../../style";
import { setFont, toggleDropDown } from "../../../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";

const DropDown = () => {
  const dispatch = useDispatch();
  // Destructured global state
  const { darkMode, dropDown } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Fonts Array
  const fontArray = [
    { name: "Sans Serif", type: "font-SansSerif" },
    { name: "Serif", type: "font-Serif" },
    { name: "Mono", type: "font-Mono" },
  ];
  // Local font state
  const [fontFamily, setFontFamily] = useState({
    name: "Sans Serif",
    type: "font-SansSerif",
  });
  // Re-render on change of font and update global font state
  useEffect(() => {
    dispatch(setFont(fontFamily));
  }, [dispatch, fontFamily]);

  return (
    <div>
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            <div
              className={`${darkMode ? "dark-shadow" : "light-shadow" 
                } absolute rounded-[5px] w-[110px] xs:w-[150px] p-4 xs:p-5 gap-3 h-auto flex flex-col justify-center
                  items-start`}
            >
              {/* Mapping through the font array, displaying all font options */}
              {fontArray.map((item, index) => {
                return (
                  <p
                    className={` ${mode.textMain} w-full ${fontFamily.type === item.type ? "text-purple" : ""
                      } cursor-pointer ${item.type} 
                  hover:text-purple font-[700] text-[14px] xs:text-[18px]`}
                    onClick={() => {
                      setFontFamily(item), 
                      dispatch(toggleDropDown(false))}
                    }
                    key={index}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
