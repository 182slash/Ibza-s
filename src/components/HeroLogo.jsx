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

  // ── MOBILE: Stays in flow (No floating bug) but moves freely ──
  if (isMobile) {
    return (
      <div style={{
        position: "relative",      // 1. Keep it relative to stay in the Logo Row
        width: 62,
        height: 66,
        margin: "0 auto",          // 2. Keep it centered
        zIndex: 100,               // 3. Bring it to the very front
        pointerEvents: "none",

        /* ── THE JOYSTICK (FREE MOVEMENT) ── */
        /* Change translate(X, Y) 
           X: Positive = Right, Negative = Left
           Y: Positive = Down, Negative = Up 
        */
        transform: "translate(0px, 0px)", 
      }}>
        
        {/* Palm Back */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "0%",          // Fine-tune individual height
            left: "38%",           // Fine-tune individual horizontal
            width: "52%",
            height: "75%",
            zIndex: 1,
            transformOrigin: "bottom center",
          }}
          animate={{ rotate: [9, 15, 9] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={palmBack}
            alt=""
            style={{
              width: "100%", height: "100%", objectFit: "contain",
              mixBlendMode: "screen", opacity: 0.65, filter: "brightness(0.85)",
            }}
          />
        </motion.div>

        {/* Palm Front */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "10%",
            width: "68%",
            height: "90%",
            zIndex: 2,
            transformOrigin: "bottom center",
          }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={palmFront}
            alt=""
            style={{
              width: "100%", height: "100%", objectFit: "contain",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      </div>
    );
  }

  // ── DESKTOP: Unchanged ──
  return (
    <div style={{
      position: "relative",
      width: 235,
      height: 294,
      zIndex: 50,
      pointerEvents: "none",
    }}>
      {/* Palm Back */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "33%",
          left: "148%",
          width: "40%",
          height: "55%",
          zIndex: 1,
          transformOrigin: "bottom center",
        }}
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={palmBack}
          alt=""
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            mixBlendMode: "screen", opacity: 0.65, filter: "brightness(0.85)",
          }}
        />
      </motion.div>

      {/* Palm Front */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "33%",
          left: "122%",
          width: "60%",
          height: "70%",
          zIndex: 2,
          transformOrigin: "bottom center",
        }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={palmFront}
          alt=""
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </div>
  );
}