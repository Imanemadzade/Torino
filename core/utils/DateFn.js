const tourDays = (start, end) => {
  const startMS = new Date(start).getTime();
  const endMS = new Date(end).getTime();
  return (endMS - startMS) / (24 * 60 * 60 * 1000);
};

export { tourDays };
