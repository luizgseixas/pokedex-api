export const evolutions_filter = (arr: Array<any>) => {
  const evolutions = arr.map((datail) =>
    Object.keys(datail).reduce((newObj, key) => {
      const value = datail[key];
      if (value !== null && value !== false && key !== 'trigger' && value !== '') {
        newObj[key] = value;
      }
      return newObj;
    }, {}),
  )[0];

  return evolutions;
};
