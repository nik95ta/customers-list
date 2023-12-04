const insertItemAtIndex = <T>(array: T[], item: T, index: number): T[] => {
  const newArray = [...array];
  newArray.splice(index, 0, item);
  return newArray;
};

export default insertItemAtIndex;
