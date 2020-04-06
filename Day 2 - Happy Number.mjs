import test from './tester.mjs';

const isHappy = n => {
	const checkList = [];
	let num = Number(n);
	while (num !== 1) {
		if (checkList.indexOf(num) >= 0) return false;
		checkList.push(num);
		num = `${num}`.split('').map(Number).reduce((acc, elm) => acc + (elm * elm), 0);
	}
	return true;
};

const CALLBACK = isHappy;
const TESTS = [
	{ i: 19, o: true },
	{ i: 18, o: false },
];

test(TESTS, CALLBACK);
