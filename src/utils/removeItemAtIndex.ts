const removeItemAtIndex = <T>(array: T[], index: number): T[] => array.filter((_, i) => i !== index);

export default removeItemAtIndex;
