import { useDispatch, useSelector } from "react-redux";
import theme from "../style";
import { useState, useEffect } from "react";
import { setSearchWord, reset } from "../store/stateSlice";
import Input from "./searchComponents/Input";
import SubmitButton from "./searchComponents/SubmitButton";
import { AnimatePresence, motion } from "framer-motion";
import ToolTip from "./ToolTip";
import CursorToolTip from "./CursorToolTip";

const Search = () => {
  // Destructured global state
  const { darkMode, formWord } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();
  // Local form focus state
  const [isFocused, setIsFocused] = useState(false);
  // Local State to check if form is empty or not when submitted
  const [isForm, setIsForm] = useState(true);
  // Form Focus function
  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (formWord.length > 0) {
      setIsForm(true);
    }
  }, [formWord]);

  // Form Blur function
  const handleBlur = () => {
    if (!formWord) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };
  // Submit Form Function, and setting formWord to searchWord
  const submitForm = (e) => {
    e.preventDefault();
    // dispatch(setSearchWord(formWord));
    // // Reset and display error message if form is empty
    // if (!formWord) {
    //   setIsForm(false);
    //   dispatch(reset());
    //   setIsFocused(true);
    // }
  };

  return (
    <div className="mb-6 sm:mb-10 flex flex-col gap-3">
      {/* Form */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <form
            // Submit eventListener
            onSubmit={submitForm}
            // Form focus eventListener
            onFocus={handleFocus}
            // Form blur eventListener
            onBlur={handleBlur}
            className={`w-full  px-4 xs:px-6 rounded-[10px] sm:rounded-[15px] ${
              mode.input
            } border-[1px] transition
        flex justify-between items-center text-white`}
          >
            {/* Input */}
            <Input />
            {/* Submit button */}
            <CursorToolTip title="Click on this to see what I love about you">
              <SubmitButton />
            </CursorToolTip>
          </form>
        </motion.div>
      </AnimatePresence>
      {/* Display error if form is submitted when empty */}
      {!isForm && (
        <p className="text-strawBerry text-[12px] xs:text-[16px] sm:text-[20px]">
          This form is required!
        </p>
      )}
    </div>
  );
};

export default Search;
