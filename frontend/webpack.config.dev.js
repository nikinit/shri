const path = require('path');
const base = require('./webpack.config')

module.exports = {
  ...base,
  optimization: {
		minimize: false
	}
};
