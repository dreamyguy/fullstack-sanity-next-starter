// Calculate chance
export const chance = percentage => {
  const v = percentage / 100;
  return Math.random() < v ? 1 : 0;
};
