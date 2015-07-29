exports.parse = function(str) {
	var result = [];
	var jsons = str.split('\n');
	for(var i = 0; i < jsons.length; i++){
		result.push(JSON.parse(jsons[i]))
	}
	return result;
}

exports.stringify = function(rows) {
	result = "";
	for(var i = 0; i < rows.length; i++) {
		result += JSON.stringify(rows[i]);
		if (i != rows.length - 1)
			result += '\n';
	}
	return result;
}

// Cleaner solution:
// exports.parse = function(str) {
// 	return str.split('\n').map(JSON.parse);
// };

// exports.stringify = function(rows) {
// 	return rows.map(JSON.stringify).join('\n');
// };