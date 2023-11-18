import { motion } from 'framer-motion';

const AnimateTransaction = (MyComponent) => {
  return () => (
    <>
      <MyComponent />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#D8C5B2',
          transformOrigin: 'top',
        }}
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#D8C5B2',
          transformOrigin: 'bottom',
        }}
      />
    </>
  );
};

export default AnimateTransaction;
