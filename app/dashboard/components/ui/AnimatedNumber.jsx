"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({ value, prefix = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1,
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(latest)}`;
        }
      },
    });

    return () => controls.stop();
  }, [value, prefix]);

  return <span ref={ref} />;
}
