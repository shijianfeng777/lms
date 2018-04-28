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
<<<<<<< HEAD
var repaySchema = new Schema({
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
    default: true
  }
});
=======
>>>>>>> fa8ed7627f8de1a2044ca463007359744afd0268

mongoose.model('Loan', LoanSchema);

