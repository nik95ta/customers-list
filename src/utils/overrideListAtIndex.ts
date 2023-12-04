const overrideListAtIndex = <T>(array: T[], newItem: T, targetIndex: number): T[] =>
  array.map((item, index) => (index === targetIndex ? newItem : item));

export default overrideListAtIndex;
