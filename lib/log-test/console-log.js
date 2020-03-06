// Prints to stdout with newline
console.log('log');
console.log('log %d', 2);  // Primary messaage, + printf()
console.log('log %s a=%d', 'message', 2);
console.log(1, 2, 3, '4', [1]);

console.info('info') // alias to log
console.debug('debug'); // alias to log

// Prints to stderr with newline.
console.error('error');
console.error('error %d', 2);
console.error('error %s a=%d', 'message', 2);
console.error(1, 2, 3, '4', [1]);

console.warn('warning'); // alias to error