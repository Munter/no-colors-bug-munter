/*global define, describe, it*/

define('colors', function (require) {
  var expect = require('base/bower_components/unexpected/unexpected');

  describe('when failing tests in this crazy setup', function () {
    it('should log colors to console', function () {
      expect({ one: 'one', two: 'two'}, 'to have properties', { three: 'three', four: 'four' });
    });
  });
});

require(['colors'], window.__karma__.start);
