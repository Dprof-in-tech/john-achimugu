'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MaskCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); 
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 pointer-events-none z-50"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: 64,
        height: 64,
        borderRadius: '50%', 
      }}
      initial={{  scale: 0.5}}
      whileHover={{ scale: 1.5, backgroundColor: '#ffffff', mixBlendMode: 'difference' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div className="w-full h-full bg-black rounded-full"></div>
    </motion.div>
  );
};

export default MaskCursor;

