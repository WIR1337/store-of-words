import { writable, type Writable } from 'svelte/store';

let first_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 1,
	totalRepeat: 2
};
let second_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 2,
	totalRepeat: 2
};
let third_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 3,
	totalRepeat: 2
};
let fourth_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 4,
	totalRepeat: 2
};
let fifth_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 5,
	totalRepeat: 2
};
let sixth_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 6,
	totalRepeat: 2
};
let seventh_day:DayCollection = {
	sentences: [],
	countRepeat: 0,
	id: 7,
	totalRepeat: 2
};

export let seven_days_collection:Writable<Array<DayCollection>> = writable([
	first_day,
	second_day,
	third_day,
	fourth_day,
	fifth_day,
	sixth_day,
	seventh_day
]);

export let repeatAfterWeak:Writable<Array<SevenDayCollection>>  = writable([]);