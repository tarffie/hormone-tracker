import { eachDayOfInterval } from 'date-fns';

function isOddMonth(month: number): boolean {
  const oddMonths = [1, 3, 5, 7, 8, 10, 12];
  return oddMonths.includes(month) ? true : false;
}

function getAllDaysInYear(year: number): Date[] {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  return eachDayOfInterval({ start, end });
}

function getAllDaysInMonth(year: number, month: number): Date[] {
  if (month < 1 || month > 12)
    throw new Error("Month number should be above 0 and under 13");
  let lastMonthDay: number;


  if (month == 2) {
    lastMonthDay = 28;
  } else if (isOddMonth(month)) {
    lastMonthDay = 31;
  } else lastMonthDay = 30;

  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month - 1, lastMonthDay);
  return eachDayOfInterval({ start, end });
}

export { getAllDaysInYear, getAllDaysInMonth };
