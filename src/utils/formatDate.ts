const formatDate = (dateTimeString: string): string => {
  if (!dateTimeString) return '';
  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) {
    return '';
  }
  return date.toISOString().split('T')[0];
};

export default formatDate;
