type Repeats = 2 | 3

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
    dateOfRepeat?: DateRepeat
}
