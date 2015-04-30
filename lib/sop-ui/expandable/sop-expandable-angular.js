angular.module('sopExpandable', [])
  .directive('sopExpand', function () {
    return {
      templateUrl: 'expand-template.html',
      controller: function () {
        this.expandables = require('expand.json');
        this.state = 'closed';
        this.change = function (index) {
          this.state = this.state === 'closed' ? 'open' : 'closed';
        };
      },
      controllerAs: 'sopExpand'
    };
  });
