const test = require('tape');
const _ = require('./src/underdash');

test('_.identity()', (t) => {
  t.equal(_.identity('hello'), 'hello')
  t.equal(_.identity(), undefined)
});

test('_.first()', (t) => {
  t.equal(_.first(['a', 'b', 'c'], 1), ['a'])
  t.equal(_.first(['a', 'b', 'c'], 2), ['a', 'b'])
  t.equal(_.first(['a', 'b', 'c']), ['a'])
  t.equal(_.first(['a', 'b', 'c'], 3), ['a', 'b', 'c'])
});

test('_.last()', (t) => {
  t.equal(_.last(['a', 'b', 'c'], 1), ['c'])
  t.equal(_.last(['a', 'b', 'c'], 2), ['b', 'c'])
  t.equal(_.last(['a', 'b', 'c']), ['c'])
  t.equal(_.last(['a', 'b', 'c'], 3), ['a', 'b', 'c'])
});


test('_.each()', (t) => {
  
})
