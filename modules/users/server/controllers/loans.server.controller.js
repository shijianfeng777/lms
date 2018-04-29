'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('Loan');

exports.list = function (req, res) {
  Loan.find({ user: req.user }).populate('book').then(function (loans) {
    res.json({ loans: loans });
  });
};

exports.create = function (req, res) {
  // need to check if the user allowed to borrow more books
  // and if the book is avaible for borrowing. 
  var user = req.user;
  var book = req.body.book;
  if (user && book) {
    var loan = new Loan();
    var now = new Date();
    loan.user = user;
    loan.book = book;

 
    loan.returned = false;
    loan.createdDate = now
    //书在14天内要还 
    loan.dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);

    loan.save(function (err) {
      if (!err) {
        return res.json({ ok: true });
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
    Loan.findById({ _id: loanId }).then(function (loan) {
      if (loan) {
        loan.return = true;
        loan.save().then(function (err) {
          if (!err) {
            res.status(201).send();
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

exports.returnBook = function (req, res) {
 
  var loan = req.loan;
  loan.returnedDate = new Date();
  loan.returned = true;
  loan.save().then(function(loan){
    if(loan) {
      res.status(200).json({ok: true});
    }
  })
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


/**
 * Loan middleware
 */
exports.loanByID = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Loan is invalid'
    });
  }

  Loan.findOne({
    _id: id
  }).exec(function (err, loan) {
    if (err) {
      return next(err);
    } else if (!loan) {
      return next(new Error('Failed to load loan ' + id));
    }

    req.loan = loan;
    next();
  });
};
