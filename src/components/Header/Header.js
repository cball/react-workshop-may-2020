import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { StarRating } from "../StarRating";

/**
 * Site Header
 */
export function Header() {
  const { toggleTheme } = useTheme();
  const [showRating, setShowRating] = useState(false);

  function toggleRating() {
    setShowRating(!showRating);
  }

  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>

      <label>
        <input
          type="checkbox"
          defaultChecked={showRating}
          onChange={toggleRating}
        />
        Toggle Ratings
      </label>

      {showRating && <StarRating maxStars={5} rating={3.5} />}
    </>
  );
}
