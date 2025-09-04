import { useEffect } from "react";

function useScrollGradient() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      // вычисляем смещение (0–100%)
      const offset = Math.min(100, Math.max(0, scrollPercent * 100));

      document.documentElement.style.setProperty(
        "--scroll-gradient-pos",
        `${offset}%`
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export default useScrollGradient;
