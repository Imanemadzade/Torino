export const vehicleToFa = (name) => {
  let vehicleToFa;
  switch (name.toLowerCase()) {
    case "bus":
      vehicleToFa = "اتوبوس";
      break;
    case "ship":
      vehicleToFa = "کشتی";
      break;
    case "train":
      vehicleToFa = "قطار";
      break;
    case "airplane":
      vehicleToFa = "پرواز";
      break;
    case "suv":
      vehicleToFa = "شاسی‌بلند";
      break;
    default:
      "نامشخص";
  }
  return vehicleToFa;
};
