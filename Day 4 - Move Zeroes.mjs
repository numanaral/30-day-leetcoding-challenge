/* eslint-disable no-param-reassign, no-unused-vars */
const moveZeroes = nums => {
	let filler = 0;
	let counter = 0;

	while (counter <= nums.length - 1) {
		const current = nums[counter];
		if (current !== 0) {
			if (counter !== filler) {
				nums[filler] = current;
				nums[counter] = 0;
			}
			filler++;
		}
		counter++;
	}
};

const numbers = [0, 1, 0, 3, 12];
const result = [1, 3, 12, 0, 0];
console.log('==========================');
console.log(`I: ${JSON.stringify(numbers)}`);
console.log(`O: ${JSON.stringify(result)}`);
console.log('--------------------------');
moveZeroes(numbers);
console.log(`R: ${JSON.stringify(numbers)}`);
console.log(`S: ${JSON.stringify(numbers) === '[1,3,12,0,0]'}`);
console.log('==========================');
