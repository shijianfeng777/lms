'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('Loan');

exports.list = function (req, res) {
  Loan.find({user: req.user}).populate('book').then(function(loans){
    res.json({loans: loans});
  });
};

exports.create = function (req, res) {

  // need to check if the user allowed to borrow more books
  // and if the book is avaible for borrowing.
  var user = req.user;
  var book = req.body.book;

  if (user && book) {  
    var loan = new Loan();
    loan.user = user;
    loan.book = book;
    loan.returned = false;
    loan.created = new Date();
    loan.save(function(err){
      if(!err){
       return res.json({ok: true})
      }
      res.status(500).json({
       error: 'failed'
      });
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
