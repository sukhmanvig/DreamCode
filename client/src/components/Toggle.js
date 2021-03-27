import React, { useEffect } from "react";
import ColourDayNight from "./colour-customization-day-night-mode-javascript";
//import "../css/colour-customization-day-night-mode-styles.css";

const Toggle = () => {
  useEffect(() => {
    ColourDayNight();
  }, []);

  return (
    <a className="togglee">
      <input type="checkbox" id="switch" name="theme" />
      <label for="switch"></label>
    </a>
  );
};

export default Toggle;
