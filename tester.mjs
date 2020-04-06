const tester = (i, o, cb) => {
	const result = cb(i);
	const isCorrect = result === o;
	console.log(`R: ${result}`);
	console.log(`S: ${isCorrect ? 'success' : 'failure'}`);
	console.log('==========================');
	console.log('');
	return isCorrect;
};

const test = (list, cb) => console.log(`===> ${list.map(testCase => {
	console.log('==========================');
	console.log(`I: ${JSON.stringify(testCase.i)}`);
	console.log(`O: ${JSON.stringify(testCase.o)}`);
	console.log('--------------------------');
	return tester(testCase.i, testCase.o, cb);
}).indexOf(false) >= 0 ? 'FAILURE' : 'SUCCESS'}`);

export default test;
