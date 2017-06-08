var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds041032.mlab.com:41032/lufanbucket';
	}

}
