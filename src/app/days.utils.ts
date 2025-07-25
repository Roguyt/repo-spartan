
export function isAfterSwitch(startDate: Date) {
    return startDate.getTime() > new Date(2025, 4, 31, 23, 59, 59).getTime();
}

export function getDays(
    startDate: Date,
    n: number,
    isRepos: (Date) => number,
): { date: Date; isRepos: number }[] {
    const result = [];

    for (let i = 0; i < n; i += 1) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);

        // Remove the sundays
        if (date.getDay() !== 0) {
            result.push({
                date,
                isRepos: isRepos(date),
            });
        }
    }

    return result;
}

export function getNextDayNumber(date: Date) {
    if (date.getDay() === 6) {
        return 1;
    }

    return date.getDay() + 1;
}

export class DaysUtils {
  public static getDayAmount(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  public static getNthArray(n: number) {
    return new Array(n);
  }

  public static getMonthFromIdx(i: number): string {
    const date = new Date(2021, i, 1);
    return date.toLocaleString('default', { month: 'long' });
  }

  public static getFirstAndLastDayOfMonth(date: Date): [Date, Date] {
    // Extract year and month from the given date
    const year = date.getFullYear();
    const month = date.getMonth();

    // Create a new Date object for the first day of the month
    const firstDayOfMonth = new Date(year, month, 1, 0, 0, 0, 0);

    // Create a new Date object for the last day of the next month
    const lastDayOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 0);

    // Return an array containing the first day and last day of the month
    return [firstDayOfMonth, lastDayOfMonth];
  }
}
