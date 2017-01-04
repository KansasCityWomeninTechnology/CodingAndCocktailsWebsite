function sessionnav() {
   return {
      template: require('./partials/sessionnav.html')
   }
}
function sessionlist() {
   return {
      template: require('./partials/sessionlist.html')
   }
}

export default angular.module('sessions.directives', [])
   .directive('sessionnav', sessionnav)
   .directive('sessionlist', sessionlist)
