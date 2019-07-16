'use strict';

const co = require('co');
const Promise = require('bluebird');


let initialized = false;

let init = co.wrap(function* () {
  if (initialized) {
    return;
  }

  process.env.restaurants_api = "https://ynhkhyee0d.execute-api.us-east-1.amazonaws.com/dev/restaurants";
  process.env.restaurants_table = "restaurants";
  process.env.AWS_REGION = "us-east-1";
  process.env.cognito_client_id = "test_cognito_client_id";
  process.env.cognito_user_pool_id = "us-east-1_wH7VM1PPz";
  process.env.cognito_server_client_id = "3ur2m4jas511oq1ot1cgsa648f";

  console.log("AWS credentials loaded.");

  initialized = true;
});

module.exports.init = init;