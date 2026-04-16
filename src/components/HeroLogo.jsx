import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import palmBack from "../assets/palm-back.png";
import palmFront from "../assets/palm-front.png";

export default function HeroLogo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ 
      position: isMobile ? "absolute" : "relative", // Floating on mobile
      top: isMobile ? "18px" : "0px",            // Locked position from top
      left: isMobile ? "52%" : "-15%",
      transform: isMobile ? "translateX(-50%)" : "none",
      width: 235, 
      height: 294, 
      zIndex: 50,                                  // High z-index to stay in front
      pointerEvents: "none"                        // Clicks go through to buttons below
    }}>
      {/* Palm Back */}
      <motion.div
        style={{
          position: "absolute",
          bottom: isMobile ? "15%" : "33%", 
          left: isMobile ? "43%" : "148%", 
          width: isMobile ? "14%" : "40%", 
          height: isMobile ? "16%" : "55%",
          zIndex: 1,
          transformOrigin: "bottom center",
        }}
        /* Back Palm: Tilt it further to the right */
        animate={{ rotate: isMobile ? [9, 15, 9] : [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={palmBack} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "screen", opacity: 0.65, filter: "brightness(0.85)" }} />
      </motion.div>

      {/* Palm Front */}
      <motion.div
        style={{
          position: "absolute",
          bottom: isMobile ? "15%" : "33%", 
          left: isMobile ? "35%" : "122%", 
          width: isMobile ? "20%" : "60%", 
          height: isMobile ? "21%" : "70%",
          zIndex: 2,
          transformOrigin: "bottom center",
        }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={palmFront} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "screen" }} />
      </motion.div>
    </div>
  );
}