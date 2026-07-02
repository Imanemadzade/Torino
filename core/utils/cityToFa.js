const cities = {
  tehran: "تهران",
  sananndaj: "سنندج",
  madrid: "مادرید",
  isfahan: "اصفهان",
  sulaymaniyah: "سلیمانیه",
  hewler: "هولر",
  mazandaran: "مازندران",
  gilan: "گیلان",
  italy: "ایتالیا",
};

export const cityToFa = (city) => {
  if (city === null || city === undefined) return "شهر نامعتبر است .";
  const lowerCaseCity = city.toLowerCase();
  if (!cities[lowerCaseCity]) return "شهر یافت نشد";
  return cities[lowerCaseCity];
};
