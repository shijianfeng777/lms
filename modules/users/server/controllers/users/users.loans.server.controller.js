'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('Loan');

/**
 * User middleware
 */

exports.loans = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'User is invalid'
    });
  }

  Loan.find({
    userId: id
  }).exec(function (err, loans) {
    if (err) {
      return next(err);
    } else if (!loans) {
      return next(new Error('Failed to load loans ' + id));
    }

    req.loans = loans;
    next();
  });
};

