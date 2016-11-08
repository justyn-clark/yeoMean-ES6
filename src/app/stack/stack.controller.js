export class StackController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1478514196563;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'bounce';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Visit <a href="https://github.com/justyn-clark/" target="_blank"><b>Github • Justyn Clark</b></a>');
    this.classAnimation = '';
  }
}
