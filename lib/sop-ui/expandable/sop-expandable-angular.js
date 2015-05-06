angular.module('sopExpandable', [])
  .directive('sopExpand', function () {
    return {
      templateUrl: 'expand-template.html',
      scope: {
        title: '@'
      },
      controller: function () {
        this.state = 'closed';
        this.change = function (index) {
          this.state = this.state === 'closed' ? 'open' : 'closed';
        };
      },
      controllerAs: 'sopExpand'
    };
  });
