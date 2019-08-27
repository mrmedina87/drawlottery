/**
 * Just a simple support for automatic unit-testing for Dates
 */

/**
 * Check if both dates are equal, otherwise throw an error
 * @param {Date} actual
 * @param {Date} benchmark
 */
const areDatesEqual = (actual, benchmark) => {
  if (actual.getTime() === benchmark.getTime()) {
    return true;
  }
  throw Error(`Failed comparison -> Date values are not equal:
    expected: ${benchmark}
    received: ${actual}`);
};

/**
 * Support to test cases
 * @param {String} description
 * @param {Function} cb
 */
const test = (description, cb) => {
  if (typeof description === 'string' && typeof cb === 'function') {
    console.log(description);
    try {
      cb()
      console.log('Pass');
    } catch (e) {
      console.log(e.message);
    }
  } else {
    throw new Error('Invalid test arguments');
  }
};
