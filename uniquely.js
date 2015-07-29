var uniq = require('uniq');

module.exports = function myFunction(list) {
	return uniq(list.split(','));
}
