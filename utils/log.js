const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(127,255,0)('◁  💗  ▷ ') + data);
			break;
		case "error":
			console.log(chalk.rgb(255,20,147)('◁  💗  ▷ ') + data);
			break;
		default:
			console.log(chalk.rgb(230,230,230)(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.rgb(0,206,209)('─Anonymous─ ▷') + data);
			break;
		case "error":
			console.log(chalk.rgb(255,105,180)('─Anonymous─ ▷ ') + data);
			break;
		default:
			console.log(chalk.rgb(64,224,208)(`─Anonymous─ ▷`) + data);
			break;
	}
                  }