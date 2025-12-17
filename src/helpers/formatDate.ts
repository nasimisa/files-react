import dayjs from 'dayjs';

export function formatDate(
  value: string | number | Date | undefined | null,
  includeTime = true
): string {
  if (!value) return '';
  const format = includeTime ? 'D MMM YYYY, hh:mm A' : 'D MMM YYYY';
  return dayjs(value).format(format);
}

export default formatDate;
