import test from './tester.mjs';

const maxProfit = prices => {
	let profit = 0;
	let day = 0;
	const lastDay = prices.length - 1;
	let ps = null;

	while (day <= lastDay) {
		const cs = prices[day];
		const ns = prices[day + 1];
		const hasStock = ps !== null;

		// BUY
		if (!hasStock && cs < ns) {
			ps = cs;
			// eslint-disable-next-line indent
        // SELL
		} else if ((hasStock && cs > ns && cs > ps) || (hasStock && day === lastDay)) {
			profit += cs - ps;
			ps = null;
		}
		day++;
	}

	return profit;
};

const CALLBACK = maxProfit;
const TESTS = [
	{ i: [7, 1, 5, 3, 6, 4], o: 7 },
	{ i: [7, 1, 5, 3, 7, 3, 6, 4], o: 11 },
	{ i: [1, 2, 3, 4, 5], o: 4 },
	{ i: [7, 6, 4, 3, 1], o: 0 },
	{ i: [2, 1, 2, 0, 1], o: 2 },
];

test(TESTS, CALLBACK);
