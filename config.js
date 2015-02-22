var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://mrwildcat.cloudant.com';
config.couchdb.port = 443;
config.couchdb.username = 'mrwildcat';
config.couchdb.password = '2016stuco';

config.twilio.sid = 'AC71c68dd65dc97406754a3ce19b42fb3d';
config.twilio.key = 'c0bd1ddece7a1d48517792945e6d5156';
config.twilio.smsWebhook = 'https://mrwildcat2.herokuapp.com/vote/sms';
config.twilio.voiceWebhook = 'https://nodeserver/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;
