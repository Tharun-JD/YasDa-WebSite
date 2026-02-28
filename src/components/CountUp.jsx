import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const valueRef = useRef({ val: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          anime({
            targets: valueRef.current,
            val: end,
            round: 1,
            duration: duration,
            easing: 'easeOutExpo',
            update: () => {
              if (ref.current) {
                ref.current.textContent = valueRef.current.val + suffix;
              }
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, suffix, duration, hasAnimated]);

  return <span ref={ref}>0{suffix}</span>;
};

export default CountUp;
