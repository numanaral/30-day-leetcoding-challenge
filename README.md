# [30-Day LeetCoding Challenge](https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/)

## Table of Contents  
---
- [How to run the code](#how-to-run-the-code)  
- [Testing](#testing)  
- [Template](#template)
 
<br>

### How to run the code
---
>= Node v13 <br>
  ? **node "Name of the file"** *(Trick: type "node dayN" press tab)* <br>
  : [**Read for < node v12**](https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import#answer-39436580)

<br>

### Testing:
---
<pre>
import test from './tester.mjs';

const YOUR_FUNC_NAME = () => {
    // your code here
}

const CALLBACK = YOUR_FUNC_NAME;
const TESTS = [
    { i: SOME_INPUT_VALUE, o: SOME_OUTPUT_VALUE },
    // ...
    // ...
];

test(TESTS, CALLBACK);
</pre>

**Calling test will result in the following:**
<pre>
==========================
I: GIVEN_INPUT
O: GIVEN_OUTPUT
--------------------------
R: YOUR_RESULT
S: IS_IT_SUCCESS
==========================

...

==========================
MORE_INDIVIDUAL_RESULTS
==========================

...

===> FINAL_RESULT
</pre>
**Eg:**
<pre>
==========================
I: [1, 2]
O: 3
--------------------------
R: 3
S: success
==========================

==========================
I: [1, 2, 3]
O: 6
--------------------------
R: 7
S: failure
==========================

===> FAILURE
</pre>

<br>

### Template:
---
There is a filer called **template.mjs** which can be used for a fast-start.
