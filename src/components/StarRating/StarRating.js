import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

/**
 * A component to handle showing star ratings
 */
export function StarRating({ maxStars, rating }) {
  const starArray = Array.from({ length: maxStars });

  return starArray.map((star, index) => {
    if (index + 1 <= rating) return <FaStar key={index} />;
    if (index < rating) return <FaStarHalfAlt key={index} />;

    return <FaRegStar key={index} />;
  });
}
