/* @flow weak */
"use strict";

var debug = require("debug");

function setLoggersHelper(debugFns, loggerFactory) {
  Object.keys(debugFns).filter(function(key) {
    return (key.substr(0, 2) !== "__");
  }).forEach(function(key) {
    if (debugFns[key] instanceof Function) {
      debugFns[key] = loggerFactory(debugFns[key].namespace);
    }
    return setLoggersHelper(debugFns[key], loggerFactory);
  });
}

var debugging = module.exports = {
  handler: {
    search: debug("jsonApi:handler:search"),
    find: debug("jsonApi:handler:find"),
    create: debug("jsonApi:handler:create"),
    update: debug("jsonApi:handler:update"),
    delete: debug("jsonApi:handler:delete")
  },
  include: debug("jsonApi:include"),
  filter: debug("jsonApi:filter"),
  validationInput: debug("jsonApi:validation:input"),
  validationOutput: debug("jsonApi:validation:output"),
  validationError: debug("jsonApi:validation:error"),
  errors: debug("jsonApi:errors"),
  requestCounter: debug("jsonApi:requestCounter"),
  __setLoggers: setLoggersHelper.bind(null, debugging)
};
