'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  path = require('path'),
  config = require(path.resolve('./config/config')),
  chalk = require('chalk');

/**
 * Loan Schema
 */
var LoanSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  book: {
    type: Schema.ObjectId,
    ref: 'Book'
  },
  returned: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Loan', LoanSchema);

