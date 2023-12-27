export const formattedDate = (date: string) => {
	const newDate = new Date(date);
	const month = newDate.getMonth();
	const day = newDate.getDate();
	return `${month} ${day}`;
};
