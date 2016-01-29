(function() {
  'use strict';

  // Establish the root object, 'window' ('self') in the browser, 'global'
  // on the server, or 'this' in some virtual machines. We use 'self'
  // instead of 'window' for 'WebWorker' support.
  var root = typeof self === 'object' && self.self === self && self ||
    typeof global === 'object' && global.global === global && global ||
    this;

  // set execution environment
  var env = typeof global === 'object' ? 'global' : 'window';

  // Save previous value of underdash
  if (root !== null) {
    var previous_underdash = root._;
  }

  // Safe reference to the underdash object
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
  };


  /* TASKS - IMPLEMENT MISSING FUNCTIONS */


  // This is a simplified reimplemtation of libraries such as underscore or lodash
  // examplifying higher order functions

  // return the value passed to the function
  // if that doesn't seem very useful to you, you are right, but you can use this function as fallbackk for
  // instances when other hgher order functions expect a function as parameter, but the user doesn't pass one
  _.identity = function(val) {

  };

  // return the first n number of elements of an array. if n is undefined simply return the very first element
  _.first = function(array, n) {

  }

  // return the last n number of element of an array. if n is underfined simply return the very last element
  _.last = function(array, n) {

  }

  // this is the first interesting function.
  // create a function whose job it is to iterate (execute a function) over each element of a collection
  // Note: a collection can be an array OR an object
  // Note further: _.each only executes a function with each element of a collection as its parameter,
  // but it doesn't return anything
  _.each = function(collection, iterator) {

  }

  /* HIGHER ORDER FUNCITON
     Reuse previously constructed functions for higher order functions.
     As an example, _.indexOf is implemented for you
  */

  // Return the index (position) at which the value (target) is found in the array,
  // Note: return -1 if the value is not in the array.
  _.indexOf = function(array, target) {
    var result = -1;
    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });
    return result;
  }


  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

  };

  // Return an array with unique values.(a duplicate-free version of the array passed)
  _.uniq = function(array) {

  };

  // Return the results of applying an iterator to each element.
  // Note: _.map works a lot like _.each, but instead of only executing the iterator function over the elements of the collection,
  // _.map also maintains and returns an array of the results of those iterator operations
  // Tip: Make sure to thoroughhly understand how _.map works and take advantage of _.map in subsequent, more complex higher order funcitons
  _.map = function(collection, iterator) {

  };
  _.pluck = function(collection, key) {

  }

  // Note: _.reduce might seem confusing at first, but it is very powerful and useful in your day to day programming needs,
  // make sure to take enought time to fully understand how _.reduce works
  _.reduce = function(colleciton, iterator, accumulator) {

  }

  // Check if a collection (array or object) contains an element (target)
  // Return true or false
  _.contains = function(collection, target) {

  }

  // Return true if *all* elements of a collection pass a truth test (iterator function), otherwise return false
  // Think of a task such as: Are all number of an array even?
  // Tip: Can you think of how to reuse _.reduce here?
  _.every = function(collection, iterator) {

  }

  // Test whether *some* elements of a collection pass a truth test
  // Tip: Try to solve _.some by reusing _.every
  _.some = function(collection, iterator) {

  }


  // Export
  // -------

  // For Node.js
  if (typeof module === 'object' && module.exports) {
    module.exports = _;
  }
  // AMD / RequireJS (needs to be at end of file)
  else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return _;
    });
  }
  // For browser
  else {
    root._ = _;
  }
}());
