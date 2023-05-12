type Repeats = 2 | 3
type uuid = string


interface DateRepeat {
    year:  number,
    month:  number,
    day:  number
}

interface DayCollection {
    sentences: string[],
	countRepeat: number,
	id: number,
	totalRepeat: Repeats
    // dateOfRepeat?: DateRepeat
}

interface SevenDayCollection {
    sentences: string[],
	countRepeat: number,
	id: string ,
	totalRepeat: Repeats
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 7
}
interface FourteenDayCollection {
    sentences: string[],
	countRepeat: number,
	id: string ,
	totalRepeat: Repeats
    dateOfRepeat: DateRepeat,
    typeOfRepeat: 14
}
