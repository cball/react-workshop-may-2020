import React from "react";
// import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import { StarRating } from "./StarRating";

export default {
  title: "StarRating",
  component: StarRating,
  decorators: [withKnobs],
};

export const Empty = () => (
  <StarRating
    maxStars={number("Max Stars", 3)}
    // onRatingChange={(rating) => action(rating)}
  />
);
export const withRating = () => <StarRating maxStars={7} rating={2} />;
export const withHalfRating = () => <StarRating maxStars={2} rating={1.5} />;
