"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
const MotionLayout = ({ children }) => {
//   const router = useRouter();

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionLayout;