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
function tools() {
   return {
      template: require('./partials/tools.html')
   }
}

export default angular.module('sessions.directives', [])
   .directive('sessionnav', sessionnav)
   .directive('sessionlist', sessionlist)
   .directive('tools', tools)
