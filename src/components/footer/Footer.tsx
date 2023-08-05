import "./Footer.css";
import { useMemo, useState } from "react";
export default function Footer() {
  function getCurrentYear() {
    setCurrentYear(new Date().getFullYear());
  }

  const [currentYear, setCurrentYear] = useState(0);

  useMemo(() => {
    getCurrentYear();
  }, [currentYear]);

  return <footer>Ⓒ {currentYear} #VANLIFE</footer>;
}
