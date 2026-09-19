"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useIsPresent } from "motion/react";
import type { ReactNode } from "react";

function TransitionPane({ children }: { children: ReactNode }) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: isPresent ? "auto" : "none" }}
      className="[grid-area:1/1]"
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="grid">
      <AnimatePresence initial={false}>
        <TransitionPane key={pathname}>{children}</TransitionPane>
      </AnimatePresence>
    </div>
  );
}
