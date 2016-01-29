

/* Hey Mark,
** there are different ways of going about it, but IMO you should with higher order functions, writing reusable functions such as each, filter, map, reduc
**
** For this example, you would need
** an each function to iterate over each element in a collection,
** a filter function to test elements in a collection, and
** a reduce function for the final result
** Note: You could also achieve this with a map function
** I will also write out a simpler way of solving this toy problem, but I strongly recommend to take the time an work through higher order functions
*/



/* OPTION 1
** with higher order functions
** lots a typing, and you will find these similarily implemented in libararies like underscore
** but those are super helpful to understand, so I am rewriting them here
*/


  var each = function(collection, iterator) {
    // if array
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      // is object
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };
  
  var filter = function(collection, test) {
    var array = []
    each(collection, function(el){
        if (test(el)) {
          array.push(el);
        }
      })
    return array;
  };
  
  var reduce = function(collection, iterator, accumulator) {   
    each(collection, function(el){
      if (accumulator === undefined) {
        accumulator = collection[0];
      } else {
        accumulator = iterator(accumulator, el);
      }
    });
    return accumulator;
  };
  
  /* this is not a higher level function, just a helper function, also reused in the simpler example below */
  var createCollection = function(a, b) {
    var array = [];
    for (a; a <= b; a++) {
      array.push(a);
    }
    return array;
  }
  

  var sum_of_overlap = function(x1, x2, y1, y2) {
    
    var collection1 = createCollection(x1, x2);
    var collection2 = createCollection(y1, y2);
    
    var overlap = filter(collection1, function(el){
      if (collection2.indexOf(el) !== -1 ) {
        return true;
        };
      });
    
    var result = reduce(overlap, function(total, val){
      return total + val;
    }, 0);
    
    return result;
  }
  
  console.log('Option 1, with higher order functions: ' + sum_of_overlap(1, 10, 5, 20));
  
  /* OPTION 2
  ** the easy way, without using higher order function
  */ 
  
  var sum_of_overlap2 = function(x1,x2,y1,y2) {
    var overlap = [];
    var result = 0;
    
    var collection1 = createCollection(x1, x2);
    var collection2 = createCollection(y1, y2);
    
    for (var i = 0; i < collection1.length; i++) {
      if (collection2.indexOf(collection1[i]) !== -1) {
        overlap.push(collection1[i]);
      }
    }
    
    for (var i = 0; i < overlap.length; i++) {
      result += overlap[i];
    }
    return result;
  }
  
  console.log('Option 2, without higher order functions: ' + sum_of_overlap2(1, 10, 5, 20));
