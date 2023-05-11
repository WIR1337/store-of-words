// export default (function() { console.log("hello!") })()
export default function createDate(){
    const DATE = new Date().toString().split(' ');

	const YEAR = DATE[3];
	const MONTH = DATE[1];
	const DAY = DATE[2];
	const NAME_OF_DAY = DATE[0]

    return `${NAME_OF_DAY} ,${DAY} ${MONTH} ${YEAR}`
}