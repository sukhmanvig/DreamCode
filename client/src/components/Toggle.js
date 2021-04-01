import React, { useEffect } from "react";
import ColourDayNight from "./colour-customization-day-night-mode-javascript";
import "../css/colour-customization-day-night-mode-styles.css";

const Toggle = () => {
  useEffect(() => {
    ColourDayNight();
  }, []);

  return (
    <div className="togglee">
      <input type="checkbox" id="switch" name="theme" />
      <label id="switchLabel" for="switch"></label>
    </div>
  );
};

export default Toggle;
