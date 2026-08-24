import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 1.8, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract numerical value if present
  const numericMatch = String(value).match(/[\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isFloat = String(targetNumber).includes('.');
  const nonNumericSuffix = String(value).replace(/[\d.]+/, '') || suffix;

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let start = 0;
    const stepTime = 20;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = targetNumber / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber, duration, isFloat]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {isInView ? (isFloat ? count.toFixed(1) : count) : 0}
      {nonNumericSuffix}
    </span>
  );
};

export default AnimatedCounter;
