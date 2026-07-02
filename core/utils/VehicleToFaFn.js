const vehicelesMap = {
  bus: "اتوبوس",
  ship: "کشتی",
  train: "قطار",
  airplane: "هواپیما",
  suv: "شاسی بلند",
};

export const vehicleToFa = (vehicle) => {
  if (vehicle === null || vehicle === undefined) return "_";
  if (!vehicelesMap[vehicle]) return vehicle;
  return vehicelesMap[vehicle];
};
