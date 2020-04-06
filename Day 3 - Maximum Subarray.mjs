import test from './tester.mjs';

const maxSubArray = nums => {
	let sum = nums[0];
	let counter = 0;
	let diff = null;

	while (counter <= nums.length - 1) {
		const currentValue = nums[counter];
		let newSum = null;

		// Handle non positive
		if (diff === null && currentValue <= 0) {
			newSum = currentValue;
		} else {
			diff = (diff || 0) + currentValue;
			const lastDiff = diff - currentValue;

			// If the diff is non-positive, reset the contiguous sum and move onto the next group
			if (diff < lastDiff) {
				newSum = lastDiff;
				if (diff <= 0) diff = null;
			} else if (counter === nums.length - 1) {
				newSum = diff;
			}
		}
		if (newSum !== null && newSum > sum) sum = newSum;
		counter++;
	}

	return sum;
};

const CALLBACK = maxSubArray;
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
