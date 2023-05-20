import { formatRelative } from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';

export function humanizeDate(date: Date) {
  const now = new Date();
  const dateRelative = formatRelative(date, now, { locale: localePtBr });
  return dateRelative
    .substring(0, 1)
    .toUpperCase()
    .concat(dateRelative.substring(1));
}
