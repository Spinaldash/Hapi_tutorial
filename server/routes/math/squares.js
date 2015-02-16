'use strict';

module.exports = {
  handler: function(request, reply) {
    var numbers = request.params.list.split(',');
    var squares = numbers.map(function(x) {
      return x * x;
    });

    reply.view('templates/math/squares', {numbers:numbers, squares:squares, list:request.params.list});
  }
};
