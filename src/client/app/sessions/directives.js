function sessionnav() {
   return {
      template: require('./partials/sessionnav.html')
   }
}

export default angular.module('sessions.directives', [])
   .directive('sessionnav', sessionnav)