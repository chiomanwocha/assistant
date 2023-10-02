import { AnimatePresence, motion } from "framer-motion";
import ToolTip from "./ToolTip";
import CursorToolTip from "./CursorToolTip";

const Content = () => {
  return (
    <section className="w-full h-auto text-white text-[20px]">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div>
            <div className="flex justify-between items-center">
              <ToolTip title="This are the things I love about you">
                {[
                  `You're kind`,
                  `You're sweet`,
                  `You're amazing`,
                  `You make me laugh hard`,
                ].map((item, index) => (
                  <div key={item} className="cursor-default">
                    <CursorToolTip title="What I love">
                      <ToolTip title="What I love">
                        <p>
                          {index + 1}. {item}
                        </p>
                      </ToolTip>
                    </CursorToolTip>
                  </div>
                ))}
              </ToolTip>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Content;
