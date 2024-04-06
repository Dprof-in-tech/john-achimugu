'use client'
import React from 'react';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MaskCursor: React.FC = () => {
  const cursorX = useMotionValue(-50); 
  const cursorY = useMotionValue(-50);

 
  const springConfig = { damping: 45, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 27); 
      cursorY.set(e.clientY - 27); 
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: 64, // Size of the mask
        height: 64, // Size of the mask
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ scale: 0.5 }}
      whileHover={{ scale: 1.5, backgroundColor: '#ffffff', mixBlendMode: 'difference' }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {/* Dot in the center of the mask */}
      <div className="w-full h-full bg-gray-900 opacity-80 rounded-full"></div>
    </motion.div>
  );
};

export default MaskCursor;
