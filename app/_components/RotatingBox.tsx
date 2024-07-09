'use client'
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import "./RotatingBox.css";
// import dynamic from 'next/dynamic';

gsap.registerPlugin(ScrollTrigger);
function RotatingBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    if (boxRef.current && boxRef2.current && sunRef.current){
        const boxWidth = boxRef2.current.offsetWidth;
        const boxX = boxRef2.current.getBoundingClientRect().x;
        const screenWidth = window.innerWidth;
        const moveDistance = screenWidth - (boxX);

        gsap.set(boxRef2.current, { x: 0 - (boxX + boxWidth)});

        gsap.to(boxRef.current, {
            duration: 2, // Animation duration in seconds
            rotation: 360, // Rotate the box 360 degrees
            repeat: -1, // Repeat indefinitely
            ease: "power1.inOut", // Animation easing function
        });
        gsap.to(boxRef2.current, {
            duration: 60, // Animation duration in seconds
            x: moveDistance, // Move the box to the left
            repeat: -1, // Repeat indefinitely
            ease: "none", // Animation easing function
        });
        gsap.to(sunRef.current, {
            y: () => `=${window.innerHeight - window.scrollY}`, // Move the sun down by viewport height (simulating setting)
            duration: 3,
            repeat: -1, // Adjust duration based on viewport height
            ease: "none", // Adjust easing for smooth descent (optional)
            scrollTrigger: {
                trigger: sunRef.current, // Start animation when box comes into view
                start: "top top", // Start animation at the top of the viewport
                end: "bottom bottom", // End animation at the bottom of the viewport
                scrub: true, // Continuously update animation based on scroll position
            }

          });
        
    }

  });

  return (
    <>
      <div ref={sunRef} className="sun"></div>
      <div ref={boxRef} className="rotating-box" style={{ backgroundColor: "aqua"}}>Test</div>
      <div ref={boxRef2} className="cloud"></div>
    </>
    );
}

// export default RotatingBox;

export default RotatingBox;