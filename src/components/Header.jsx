import Logo from "./headerComponents/Logo";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  return (
    // Header Container
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        <header className="flex w-full py-6 xs:py-8 relative sm:py-14 justify-between items-center">
          <Logo />
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
