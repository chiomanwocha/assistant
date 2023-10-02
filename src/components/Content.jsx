import { useSelector } from "react-redux";
import Word from "./contentComponents/Word";
import Error from "./contentComponents/Error";
import Loading from "./contentComponents/Loading";
import { AnimatePresence, motion } from "framer-motion";
import ToolTip from "./ToolTip";

const Content = () => {
  // Destructured global state
  const { success, loading, error } = useSelector((state) => state.app);

  return (
    // Content Container
    <section className="w-full h-auto">
      {/* Conditional rendering of loading, content and error when true */}
      {loading ? (
        <Loading />
      ) : success ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <div>
              <div className="flex justify-between items-center">
                {/* Searched Word */}
                <ToolTip title="This is your name">
                  <Word />
                </ToolTip>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        error && <Error />
      )}
    </section>
  );
};

export default Content;
