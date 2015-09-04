var config = module.exports = {};

if (process.env.NODE_ENV == "dev") {
	// DEVELOPMENT-SPECIFIC CONFIG //
	config.portNum = 3000;
    config.dbconn = 'mongodb://localhost/interviewapp-dev'
	
} else {
	// PRODUCTION-SPECIFIC CONFIG //
	config.portNum = 80;
    config.dbconn = 'mongodb://localhost/interviewapp-dev'

	
}