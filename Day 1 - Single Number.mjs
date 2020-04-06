import test from './tester.mjs';

const singleNumber = nums => parseInt(Object.keys(nums.reduce((acc, num) => {
	if (!acc[num]) {
		acc[num] = 1;
		return acc;
	}
	delete acc[num];
	return acc;
}, {}))[0]);


const CALLBACK = singleNumber;
const TESTS = [
	{ i: [2, 2, 1], o: 1 },
	{ i: [4, 1, 2, 1, 2], o: 4 },
];

test(TESTS, CALLBACK);
