"use client";
import React, { ReactElement, useContext, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
gsap.registerPlugin(useGSAP);

const Transition = ({ children }: { children: ReactElement }) => { 
  const [displayChildren, setDisplayChildren] = useState<ReactElement>(children); 
  const {timeline} = useContext(TransitionContext)

  useGSAP(() => {
    if (children.key !== displayChildren.key) { 
      timeline.play().then(() => {
        setDisplayChildren(children)
        window.scrollTo(0,0);
        timeline.pause().clear();
      })
      setDisplayChildren(children)
    }
  }, [children]);


  return (
    <div>
      {displayChildren}
    </div>
  );
};

export default Transition;