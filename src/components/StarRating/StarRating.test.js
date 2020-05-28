import React from "react";
import { StarRating } from "./StarRating";
import { render } from "../../tests/test-utils";

describe("StarRating", () => {
  describe("with no rating", () => {
    it("shows empty stars", async () => {
      const { findAllByTestId } = render(<StarRating maxStars={3} />);
      const emptyStars = await findAllByTestId("emptyStar");

      expect(emptyStars.length).toEqual(3);
    });
  });

  describe("with a rating", () => {
    it("shows full stars", async () => {
      const { findAllByTestId } = render(
        <StarRating maxStars={5} rating={2} />
      );

      const emptyStars = await findAllByTestId("emptyStar");
      const filledStars = await findAllByTestId("filledStar");

      expect(emptyStars.length).toEqual(3);
      expect(filledStars.length).toEqual(2);
    });
  });

  describe("with a 1/2 rating", () => {
    it("shows half stars", async () => {
      const { findAllByTestId } = render(
        <StarRating maxStars={5} rating={2.5} />
      );

      const emptyStars = await findAllByTestId("emptyStar");
      const filledStars = await findAllByTestId("filledStar");
      const halfStars = await findAllByTestId("halfStar");

      expect(emptyStars.length).toEqual(2);
      expect(filledStars.length).toEqual(2);
      expect(halfStars.length).toEqual(1);
    });
  });
});
