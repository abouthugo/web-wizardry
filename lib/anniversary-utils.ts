export const anniversaryDate = new Date(2023, 6, 17, 15, 35);
export const monthsBetween = () =>
  Math.floor((new Date().getTime() - anniversaryDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
