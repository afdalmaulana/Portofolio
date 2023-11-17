import { motion } from 'framer-motion';

const AnimateTransaction = (MyComponent) => {
  return () => (
    <>
      <MyComponent />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'black',
          transformOrigin: 'right',
        }}
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'black',
          transformOrigin: 'left',
        }}
      />
    </>
  );
};

export default AnimateTransaction;
