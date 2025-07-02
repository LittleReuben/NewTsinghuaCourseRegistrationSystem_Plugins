export enum Rating {
    one = '1',
    two = '2',
    three = '3',
    four = '4',
    five = '5'
}

export const ratingList = Object.values(Rating)

export function getRating(newType: string): Rating {
    return ratingList.filter(t => t === newType)[0]
}
