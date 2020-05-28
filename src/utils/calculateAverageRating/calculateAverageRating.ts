/**
 * Calculates an average rating based on array of ratings passed in.
 * @param {*} ratings The rating to average
 */
export function calculateAverageRating(ratings: number[] = []) {
  const allNumbers = ratings.every((rating) => typeof rating === "number");

  if (!allNumbers) return;

  const sum = ratings.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return sum / ratings.length;
}
