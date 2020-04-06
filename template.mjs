import test from './tester';

const FUNC_NAME = list => {
    let i = 0;
    let someVal = null;
    const len = list.length - 1;

	while (i <= len) {
        const cv = list[i];
        
		i++;
	}

	return someVal;
};

const CALLBACK = FUNC_NAME;

const TESTS = [
	{ i: [-2, 1, -3, 4, -1, 2, 1, -5, 4], o: 6 },
	{ i: [-1], o: -1 },
	{ i: [-2, -1], o: -1 },
	{ i: [-1, -2], o: -1 },
	{ i: [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4], o: 6 },
	{ i: [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4, 3], o: 8 },
	{ i: [-1, 0, -2], o: 0 },
	{ i: [1, 2, -1], o: 3 },
];

test(TESTS, CALLBACK);
