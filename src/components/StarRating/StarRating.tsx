import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  /** The number of stars to render */
  maxStars: number;
  /** The current rating */
  rating?: number;
}

/**
 * A component to handle showing star ratings
 */
export function StarRating({ maxStars, rating }: Props) {
  const { theme } = useTheme();
  const starArray = Array.from({ length: maxStars });

  const starElements = starArray.map((star, index) => {
    if (index + 1 <= rating)
      return (
        <FaStar key={index} color={theme.yellow} data-testid="filledStar" />
      );
    if (index < rating)
      return (
        <FaStarHalfAlt
          key={index}
          color={theme.yellow}
          data-testid="halfStar"
        />
      );

    return (
      <FaRegStar key={index} color={theme.yellow} data-testid="emptyStar" />
    );
  });

  return <div>{starElements}</div>;
}
