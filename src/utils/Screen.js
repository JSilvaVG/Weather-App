import { useState, useEffect } from "react";

// Hook que retorna true se a tela for maior ou igual a 768px (md)
export function useIsScreenMdUp() {
  const [isMdUp, setIsMdUp] = useState(() => {
    if (typeof window === "undefined") return false; // SSR-safe
    return window.innerWidth >= 768;
  });

  useEffect(() => {
    function handleResize() {
      setIsMdUp(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMdUp;
}
