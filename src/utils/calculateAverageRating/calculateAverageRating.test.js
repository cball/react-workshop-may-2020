import { calculateAverageRating } from "./calculateAverageRating";

describe("calculateAverageRating", () => {
  describe("with an array of ratings", () => {
    it("returns the average", () => {
      const ratings = [1, 3, 5];
      const result = calculateAverageRating(ratings);

      expect(result).toEqual(3);
    });
  });

  describe("with a junk array", () => {
    it("returns undefined", () => {
      const ratings = ["hello", "there"];
      const result = calculateAverageRating(ratings);

      expect(result).toBeUndefined();
      expect(result).toBeUndefined();
    });
  });
});
