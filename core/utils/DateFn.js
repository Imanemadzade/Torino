import { toJalaali } from "jalaali-js";

const jalalieMonthesMap = {
  1: "فروردین",
  2: "اردیبهشت",
  3: "خرداد",
  4: "تیر",
  5: "مرداد",
  6: "شهریور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دی",
  11: "بهمن",
  12: "اسفند",
};

const tourDays = (start, end) => {
  const startMS = new Date(start).getTime();
  const endMS = new Date(end).getTime();
  return (endMS - startMS) / (24 * 60 * 60 * 1000);
};

const toJalaliDate = (date) => {
  if (date === null || date === undefined || date === "") return "";
  const d = new Date(date);
  const { jy, jm, jd } = toJalaali(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate()
  );
  const jalaliMonthName = jalalieMonthesMap[jm];

  const stringDate = `${jd} ${jalaliMonthName} ${jy}`;

  return stringDate;
};

export { tourDays, toJalaliDate };
