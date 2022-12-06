export const parseMinMax = (
  value: number,
  min: number,
  max: number
): string => {
  if (value < min) {
    return "0";
  }
  if (value > max) {
    return max.toFixed(0);
  }
  return value.toFixed(0);
};
