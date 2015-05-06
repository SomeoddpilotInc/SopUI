var expandTemplate = ['<div ng-click="sopExpand.change()"',
                      '  ng-class="{\'sop-expandable--open\' : sopExpand.isOpen, \'sop-expandable--closed\' : !sopExpand.isOpen }">',
                      '  <button sop-expandable-button>',
                      '    {{ title }}',
                      '    <div sop-expandable-caret ng-if="!noCaret"></div>',
                      '  </button>',
                      '  <div sop-expandable>',
                      '    <ng-transclude></ng-transclude>',
                      '  </div>',
                      '</div>'].join('');


angular.module('sopExpandable', [])
  .directive('sopExpand', function () {
    return {
      template: expandTemplate,
      scope: {
        title: '@',
        noCaret: '@',
        open: '@'
      },
      controller: function ($scope) {
        this.isOpen = $scope.isOpen;
        this.change = function (index) {
          this.isOpen = !this.isOpen;
        };
      },
      controllerAs: 'sopExpand'
    };
  });
