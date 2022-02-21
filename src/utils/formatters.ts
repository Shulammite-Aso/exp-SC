export const formatDate = (
  timestamp: Date | string | number | undefined,
  format?: Intl.DateTimeFormatOptions,
): string => {
  if (!timestamp) return '';
  const initFormat = format || {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat('en-NG', initFormat).format(date);
  return formatter;
};
