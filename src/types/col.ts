type Repeats = 2 | 3
type ID = string | number


interface DateRepeat {
    year:  number,
    month:  number,
    day:  number
}

interface DayCollection {
    sentences: string[],
	countRepeat: number,
	id: ID,
	totalRepeat: Repeats
}

interface SevenDayCollection extends DayCollection{
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 7
}
interface FourteenDayCollection extends DayCollection {
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 14
}
interface FinischedRepeat {
    sentences: string[],
    id: ID,
}

type AnyCollection = DayCollection | SevenDayCollection | FourteenDayCollection