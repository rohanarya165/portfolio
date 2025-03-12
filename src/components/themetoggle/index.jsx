import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    settheme(newTheme);
    localStorage.setItem("theme", newTheme); // Update immediately
    document.documentElement.setAttribute("data-theme", newTheme); // Apply immediately
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
