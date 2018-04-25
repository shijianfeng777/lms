'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('Loan');

exports.list = function (req, res, next, id) {
  Loan.find({}).exec(function (err, loans) {
    if (err) {
      return next(err);
    } else if (!loans) {
      return next(new Error('Failed to load loans ' + id));
    }

    req.loans = loans;
    next();
  });
};

exports.create = function (req, res) {
  // Init Variables
  var user = req.body.user;
  var book = req.body.book;

  if (user && book) {
    var loan = new Loan();
    loan.user = user;
    loan.book = book;

    loan.save(function (err) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        req.login(user, function (err) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.json(user);
          }
        });
      }
    });
  } else {
    res.status(401).send({
      message: 'User or books doesn\t exist' 
    });
  }
};

exports.update = function (req, res) {
  var loanId = req.body.loanId;

  if (loanId) {
    Loan.findById({_id: loanId}).then(function(loan){
      if(loan){
        loan.return = true;
        loan.save().then(function(err){
          if(!err){
            res.status(201).send();
          }
        })
      }
    })
  } else {
    res.status(401).send({
      message: 'User or books doesn\t exist' 
    });
  }
};

exports.delete = function (req, res) {
  var loanId = req.params.id;
  if (loanId) {
    console.log('loadId: ' + loanId);
     res.status(201).send();
   
  } else {
    res.status(401).send({
      message: 'User or books doesn\t exist' 
    });
  }
};
