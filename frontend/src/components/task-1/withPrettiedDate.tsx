import moment from 'moment';
import type { DateTimeProps } from './Task1';

export function withPrettiedDate(Component: React.ComponentType<DateTimeProps>) {
  return function DateTimePretty({ date, ...args }: DateTimeProps) {
    const timeSinsePosted = new Date().getTime() - moment(date).valueOf();
    let time = '';
    if (timeSinsePosted < 1000 * 60 * 60) {
      time = `${(timeSinsePosted / 1000 / 60).toFixed(0)} минут назад`;
    }
    if (timeSinsePosted >= 1000 * 60 * 60 && timeSinsePosted < 1000 * 60 * 60 * 24) {
      time = `${(timeSinsePosted / 1000 / 60 / 60).toFixed(0)} часов назад`;
    }
    if (timeSinsePosted >= 1000 * 60 * 60 * 24) {
      time = `${(timeSinsePosted / 1000 / 60 / 60 / 24).toFixed(0)} дней назад`;
    }
    return <Component date={time} {...args} />;
  };
}

