export enum DayOfWeek {
    monday = 'Monday',
    tuesday = 'Tuesday',
    wednesday = 'Wednesday',
    thursday = 'Thursday',
    friday = 'Friday',
    saturday = 'Saturday',
    sunday = 'Sunday'
}

export const dayOfWeekList = Object.values(DayOfWeek)

export function getDayOfWeek(newType: string): DayOfWeek {
    return dayOfWeekList.filter(t => t === newType)[0]
}
