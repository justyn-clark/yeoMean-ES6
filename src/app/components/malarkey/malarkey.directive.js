export function MalarkeyDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: MalarkeyController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el) {
    let typist = malarkey(el[0], {
      typeSpeed: 60,
      deleteSpeed: 40,
      pauseDelay: 900,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.extraValues, (value) => {
      typist.type(value).pause().delete();
    });
  }

}

class MalarkeyController { }
