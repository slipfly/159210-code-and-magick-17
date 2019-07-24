'use strict';

(function () {
  window.util = {
    getRandomFromArray: function (arr) {
      return Math.floor(Math.random() * arr.length);
    },
    wizardsCoats: ['rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'],
    wizardsEyes: ['black', 'red', 'blue', 'yellow', 'green']
  };
})();
