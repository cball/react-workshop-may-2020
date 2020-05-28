import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

/**
 * A component to handle showing star ratings
 */
export function StarRating({ maxStars, rating }) {
  const { theme } = useTheme();
  const starArray = Array.from({ length: maxStars });

  return starArray.map((star, index) => {
    if (index + 1 <= rating) return <FaStar key={index} color={theme.yellow} />;
    if (index < rating)
      return <FaStarHalfAlt key={index} color={theme.yellow} />;

    return <FaRegStar key={index} color={theme.yellow} />;
  });
}
