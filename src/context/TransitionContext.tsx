"use client";
import React, { createContext, ReactNode, useState } from "react"; 
import gsap from "gsap";

interface TransitionContextType {
  timeline: gsap.core.Timeline;
  setTimeline: (tl: gsap.core.Timeline) => void;
}

export const TransitionContext = createContext<TransitionContextType>({
  timeline: gsap.timeline({ paused: true }),
  setTimeline: () => {},
});

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
};